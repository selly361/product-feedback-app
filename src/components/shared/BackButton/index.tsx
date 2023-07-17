import { ArrowLeftIcon } from 'icons'
import { StyledBackButton } from './BackButton.styles'
import { useNavigate } from 'react-router-dom'

function BackButton() {

    const navigate = useNavigate()
    
  return (
    <StyledBackButton onClick={() => navigate(-1)}>
        <ArrowLeftIcon />
        Go Back
    </StyledBackButton>
  )
}

export default BackButton