import { StyledImage, StyledUserProfile, Username } from './UserProfile.styles'
import { useAppDispatch, useAppSelector } from 'app/hooks'

import React from 'react'
import { changeUser } from 'features/product-feedback-app/productFeedbackSlice'
import { userArray } from 'constantParameters'

function UserProfile() {

    const { username, image } = useAppSelector(state => state.currentUser)

    const dispatch = useAppDispatch()

    function handleClick(){
      const index = userArray.findIndex(user => user.username === username)
      
      if(index === userArray.length - 1){
        dispatch(changeUser(userArray[0].username))
      } else {
        dispatch(changeUser(userArray[index + 1].username))
      }
    }

  return (
    <StyledUserProfile onClick={handleClick}>
        <StyledImage src={image} />
      <Username>{username}</Username>  
    </StyledUserProfile>
  )
}

export default UserProfile
