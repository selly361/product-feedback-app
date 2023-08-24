// AddComment.tsx

import { Container, NumberOfCharacters, StyledAddComment, StyledInput, StyledLabel } from './AddComment.styles';

import { Button } from 'components';
import { ChangeEvent } from "react"
import { useAddComment } from 'hooks';
import { useAppSelector } from 'app/hooks';
import { useParams } from 'react-router-dom';

function AddComment() {
  const { id } = useParams();
  const user = useAppSelector((state) => state.currentUser);
  const productId = id as string;

  const {
    commentContent,
    setCommentContent,
    charactersLeft,
    handleCommentSubmit,
  } = useAddComment(productId);

  return (
    <StyledAddComment>
      <StyledLabel>Add Comment</StyledLabel>
      <StyledInput
        value={commentContent}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setCommentContent(e.target.value)}
        placeholder="Type your comment here"
      />
      <Container>
        <NumberOfCharacters>{charactersLeft} characters left</NumberOfCharacters>
        <Button
          buttonType={1}
          onClick={() => handleCommentSubmit(user)}
          content="Post Comment"
        />
      </Container>
    </StyledAddComment>
  );
}

export default AddComment;
