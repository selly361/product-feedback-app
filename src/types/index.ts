export interface User {
  image: string
  name: string
  username: string
}

interface Comment {
  id: number
  content: string
  user: User
  replies?: Reply[]
}

interface Reply {
  content: string
  replyingTo: string
  user: User
}

interface ProductRequest {
  id: number
  title: string
  category: string
  upvotes: number
  upvoted: string[]
  status: string
  description: string
  comments?: Comment[]
}

export interface ProductFeedBack {
  currentUser: User
  productRequests: ProductRequest[]
}
