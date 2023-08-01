import {
  Container,
  Message,
  ReplyButton,
  StyledComment,
  StyledImage,
  StyledName,
  StyledReplyTo,
  StyledUsername,
  SubContainer,
  TinyContainer
} from "./Comment.styles";

import { AddReply } from "components";
import { CommentProps } from "./Comment.types";
import { useState } from "react";

function Comment({ info, type }: CommentProps) {
  const [reply, setReply] = useState(false);

  return (
    <StyledComment className={type}>
      <StyledImage src={info.user.image} alt={info.user.name} />
      <Container>
        <TinyContainer>
          <StyledName>{info.user.name}</StyledName>
          <StyledUsername>@{info.user.username}</StyledUsername>
        </TinyContainer>
        <ReplyButton onClick={() => setReply((e) => !e)}>Reply</ReplyButton>
        <Message>
          {type === "reply" ? (
            <StyledReplyTo>{`@${info?.replyingTo} `}</StyledReplyTo>
          ) : null}
          {info.content}
        </Message>
        {reply ? <AddReply closeReply={() => setReply(false)} commentId={info.commentId} replyingTo={info.user.username} /> : null}
      </Container>
    </StyledComment>
  );
}

export default Comment;
