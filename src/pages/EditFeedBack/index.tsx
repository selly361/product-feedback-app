import { BackButton, EditFeedBackForm } from 'components'

import React from 'react'
import { StyledEditFeedBack } from './EditFeedBack.styles'

const EditFeedBackPage = () => {
  return (
    <StyledEditFeedBack>
      <BackButton />
      <EditFeedBackForm />
    </StyledEditFeedBack>
  )
}

export default EditFeedBackPage