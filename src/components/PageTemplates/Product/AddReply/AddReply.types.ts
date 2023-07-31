import { Reply, User } from "types";

export interface AddReplyProps {
  commentId: string;
  replyingTo: string;
  closeReply: () => void
}
