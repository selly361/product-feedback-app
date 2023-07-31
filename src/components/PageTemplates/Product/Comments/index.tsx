import { Container, RepliesContainer, StyledComments, StyledTitle } from "./Comments.styles";

import { Comment } from "components";
import { CommentsProps } from "./Comments.types";
import { numberOfComments } from "utils";

function Comments({ comments }: CommentsProps) {
  if (comments) {
    const commentsLength = numberOfComments(comments);

    return (
      <StyledComments>
        {comments.length !== 0 ? (
          <StyledTitle>
            {commentsLength} {commentsLength === 1 ? "Comment" : "Comments"}
          </StyledTitle>
        ) : null}

        {comments.map((data) => (
          <Container
            className={data.replies?.length ? "replies" : ""}
            key={data.id}
          >
            <Comment info={{...data, commentId: data.id, replyingTo: data.user.username}} type="comment" />
            <RepliesContainer>
              {data.replies?.map(reply => (
                <Comment info={{...reply, commentId: data.id, replyingTo: reply.replyingTo}} type="reply" />
              ))}
            </RepliesContainer>
          </Container>
        ))}
      </StyledComments>
    );
  }

  return null;
}

export default Comments;
