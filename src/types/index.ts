export type TStatus =
  | "suggestion"
  | "planned"
  | "in-progress"
  | "live"
  | "bug"
  | "feature"
  | "enhancement"

export type TCategory = "enhancement" | "feature" | "bug" | "ui" | "ux" | "all"

export type TSortPreference =
  | "Most Upvotes"
  | "Least Upvotes"
  | "Most Comments"
  | "Least Comments"

export interface User {
  image: string
  name: string
  username: string
}

export interface Comment {
  id: string
  content: string
  user: User
  replies?: Reply[]
}     

export interface Reply {
  content: string
  replyingTo: string
  user: User
}

export interface ProductRequest {
  id: string
  title: string
  category: string
  upvotes: number
  upvoted: string[]
  status: string
  description: string
  comments: Comment[]
}

export interface ProductFeedBack {
  currentUser: User
  productRequests: ProductRequest[]
}

export interface InitialState {
  currentUser: User
  suggestions: ProductRequest[]
  roadmap: ProductRequest[]
  filteredSuggestions: ProductRequest[]
  filterConfig: {
    sortPreference: TSortPreference
    category: TCategory
  }
}

export interface ICommentPayload  {
  comment: Comment
  productId: string
}

export interface IReplyPayload  {
  commentId: string
  productId: string
  reply: Reply
}