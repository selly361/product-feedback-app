import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ProductFeedBack } from "types";
import data from "data/data.json"

interface InitialState {
    data: ProductFeedBack
    currentUser: string
    filterConfig: {
        sortPreference: string
        category: string
    }    
}


const initialState: InitialState = {
    data,

    currentUser: "velvetround",
    
    filterConfig: {
        sortPreference: "Most Upvotes",
        category: "All"
    },

}

export const productFeedbackSlice = createSlice({

    name: "product-feedback-app",

    initialState,

    reducers: {


        
    }
})


export default productFeedbackSlice.reducer