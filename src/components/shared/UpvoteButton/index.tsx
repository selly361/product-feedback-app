import React, { MouseEvent } from 'react'
import { StyledUpVoteButton, Votes } from './UpvoteButton.styles'

import { ArrowUpIcon } from 'icons'
import { IUpVoteButtonProps } from './UpvoteButton.types'
import { toggleVote } from 'features/product-feedback-app/productFeedbackSlice'
import { useAppDispatch } from 'app/hooks'

function UpvoteButton({ active, upvotes, productId }: IUpVoteButtonProps) {

    const dispatch = useAppDispatch()

    console.log(active)

    const handleClick = (e: MouseEvent) => {
        e.stopPropagation()
        console.log("clicked")
        dispatch(toggleVote(productId))
    }
    

  return (
    <StyledUpVoteButton className={active ? "active" : ""} onClick={handleClick} >
        <ArrowUpIcon />
        
        <Votes>{upvotes}</Votes>
    </StyledUpVoteButton>
  )
}

export default UpvoteButton