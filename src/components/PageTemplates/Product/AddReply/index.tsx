import { StyledAddReply, StyledTextarea } from "./AddReply.styles"

import { AddReplyProps } from "./AddReply.types"
import { Button } from "components"
import { ChangeEvent } from "react"
import { useAddReply } from "hooks"

function AddReply({ commentId, replyingTo, closeReply }: AddReplyProps) {

  const { content, setContent, handlePostReply, inputRef } = useAddReply({ replyingTo, commentId, closeReply })


  return (
    <StyledAddReply>
      <StyledTextarea
        ref={inputRef}
        value={content}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setContent(e.target.value)
        }
      />
      <Button buttonType={1} onClick={handlePostReply} content="Post Reply" />
    </StyledAddReply>
  )
}

export default AddReply
