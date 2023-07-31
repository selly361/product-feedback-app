import { Comment, Reply, User } from "types";

export interface CommentProps {
  info: Info;
  type: "reply" | "comment";
}

export interface Info {
  commentId: string;
  replyingTo: string;
  content: string;
  user: User;
  replies?: Reply[];
}
