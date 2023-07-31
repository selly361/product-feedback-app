import { useEffect, useRef, useState } from "react";

import { UseAddReplyProps } from "./useAddReply.types"
import { addReply } from "features/product-feedback-app/productFeedbackSlice";
import { useAppDispatch } from "app/hooks";
import { useAppSelector } from "app/hooks";
import { useParams } from "react-router-dom";

export const useAddReply = ({ replyingTo, commentId, closeReply  }: UseAddReplyProps) => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.currentUser);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const handlePostReply = () => {
    const productId = id as string;

    const reply = {
      replyingTo,
      content,
      user,
    };

    dispatch(addReply({ productId, commentId, reply }));
    closeReply();
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return { content, setContent, handlePostReply, inputRef };
};
