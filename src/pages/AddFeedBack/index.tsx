import { AddFeedBackForm, BackButton } from 'components'

import React from 'react'
import { StyledAddFeedBack } from './AddFeedBack.styles'

const AddFeedBackPage = () => {
  return (
    <StyledAddFeedBack>
      <BackButton />
      <AddFeedBackForm />
    </StyledAddFeedBack>
  )
}

export default AddFeedBackPage