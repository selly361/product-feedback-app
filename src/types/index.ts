export type TStatus =
  | "suggestion"
  | "planned"
  | "in-progress"
  | "live"
  | "bug"
  | "feature"
  | "enhancement";

export type TCategory = "enhancement" | "feature" | "bug" | "ui" | "ux" | "all";

export type TSortPreference =
  | "Most Upvotes"
  | "Least Upvotes"
  | "Most Comments"
  | "Least Comments";

export interface User {
  image: string;
  name: string;
  username: string;
}

interface Comment {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
}

interface Reply {
  content: string;
  replyingTo: string;
  user: User;
}

export interface ProductRequest {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  upvoted: string[];
  status: string;
  description: string;
  comments?: Comment[];
}

export interface ProductFeedBack {
  currentUser: User;
  productRequests: ProductRequest[];
}
