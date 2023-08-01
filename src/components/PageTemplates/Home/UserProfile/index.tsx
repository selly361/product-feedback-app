import { StyledImage, StyledUserProfile, Username } from "./UserProfile.styles";
import { useAppDispatch, useAppSelector } from "app/hooks";

import React from "react";
import { changeUser } from "features/product-feedback-app/productFeedbackSlice";
import { userArray } from "consts";

function UserProfile() {
  const { username, image } = useAppSelector((state) => state.currentUser);

  const dispatch = useAppDispatch();

  function handleClick() {
    const index = userArray.findIndex((user) => user.username === username);

<<<<<<< HEAD
    if (index === userArray.length - 2) {
      dispatch(changeUser(userArray[0].username));
    } else {
      dispatch(changeUser(userArray[index + 1].username));
=======
    function handleClick(){
      const index = userArray.findIndex(user => user.username === username)
      
      if(index === userArray.length - 1){
        dispatch(changeUser(userArray[0].username))
      } else {
        dispatch(changeUser(userArray[index + 1].username))
      }
>>>>>>> a6766b04aa8cbb446f1e983fd0ab531e9804d393
    }
  }

  return (
    <StyledUserProfile onClick={handleClick}>
      <StyledImage src={image} />
      <Username>{username}</Username>
    </StyledUserProfile>
  );
}

<<<<<<< HEAD
export default UserProfile;
=======
export default UserProfile
>>>>>>> a6766b04aa8cbb446f1e983fd0ab531e9804d393
