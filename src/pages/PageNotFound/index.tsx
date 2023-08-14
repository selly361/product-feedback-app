import { StyledLink, StyledMessage, StyledPageNotFound } from './PageNotFound.styles'

import { Button } from "components"
import { ConfusedFace } from 'icons'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <StyledMessage>404</StyledMessage>
        <ConfusedFace />
        <StyledLink to="/">Go Back Home</StyledLink>
    </StyledPageNotFound>
  )
}

export default PageNotFound