import {
  ICommentPayload,
  IReplyPayload,
  ProductRequest,
  TCategory,
  TSortPreference,
} from "types"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { categorizeProducts, filter, findUser } from "utils"

import { initialState } from "constantParameters"

export const productFeedbackSlice = createSlice({
  name: "product-feedback-app",

  initialState,

  reducers: {
    changeUser: (state, action: PayloadAction<string>) => {
      const selectedUser = findUser(action.payload)

      selectedUser && (state.currentUser = selectedUser)
    },

    filterCategory: (state, action: PayloadAction<TCategory>) => {
      state.filterConfig.category = action.payload
      filter(state)
    },

    sort: (state, action: PayloadAction<TSortPreference>) => {
      state.filterConfig.sortPreference = action.payload

      filter(state)
    },
    toggleVote: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const username = state.currentUser.username;

      const selectedProduct = state.suggestions.find((product) => product.id === id);

      if (selectedProduct) {
        const index = state.suggestions.indexOf(selectedProduct);

        if (selectedProduct.upvoted.includes(username)) {
          state.suggestions[index].upvoted = selectedProduct.upvoted.filter((name) => name !== username);
          state.suggestions[index].upvotes--;
        } else {
          state.suggestions[index].upvoted.push(username);
          state.suggestions[index].upvotes++;
        }
      }

      filter(state);
    },
    addProduct: (state, action: PayloadAction<ProductRequest>) => {
      const createdProduct = action.payload

      const roadmapStatus = ["planned", "in-progress", "live"]

      if (roadmapStatus.includes(createdProduct.status)) {
        state.roadmap.push(createdProduct)
      } else {
        state.suggestions.push(createdProduct)
      }

      filter(state)
    },

    deleteProduct: (state, action: PayloadAction<number>) => {
      const id = action.payload

      state.suggestions = state.suggestions.filter(
        (product) => product.id !== id
      )

      state.roadmap = state.roadmap.filter(
        (product) => product.id !== id
      )

      filter(state)
    },

    editProduct: (state, action: PayloadAction<ProductRequest>) => {
      const editedProduct = action.payload

      const index = state.suggestions.findIndex(
        (product) => product.id === editedProduct.id
      )

      if (index !== -1) state.suggestions.splice(index, 1)
      else state.roadmap.splice(index, 1)

      if (["planned", "in-progress", "live"].includes(editedProduct.status)) {
        state.roadmap.push(editedProduct)
      } else {
        state.suggestions.push(editedProduct)
      }
    },

    addComment: (state, action: PayloadAction<ICommentPayload>) => {
      const { productId, comment } = action.payload

      const productRequests = state.suggestions.concat(state.roadmap)

      const index = productRequests.findIndex(
        (product) => product.id === productId
      )

      if (index !== -1) {
        productRequests[index].comments?.push(comment)

        const { roadmap, suggestions } = categorizeProducts(productRequests)

        state.roadmap = roadmap
        state.suggestions = suggestions
      }
    },

    addReply: (state, action: PayloadAction<IReplyPayload>) => {
      const { productId, commentId, reply } = action.payload

      const productRequests = state.suggestions.concat(state.roadmap)

      const productIndex = productRequests.findIndex(
        (product) => product.id === productId
      )

      if (productIndex !== -1) {
        const commentIndex = productRequests[productIndex].comments?.findIndex(
          (comment) => comment.id === commentId
        )

        productRequests[productIndex].comments[commentIndex].replies?.push(
          reply
        )

        const { roadmap, suggestions } = categorizeProducts(productRequests)

        state.roadmap = roadmap
        state.suggestions = suggestions
      }
    },
  },
})

export default productFeedbackSlice.reducer

export const {
  addComment,
  addProduct,
  addReply,
  changeUser,
  filterCategory,
  sort,
  deleteProduct,
  editProduct,
  toggleVote,
} = productFeedbackSlice.actions
