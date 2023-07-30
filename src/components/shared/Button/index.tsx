import { IButtonProps } from './Button.types'
import { StyledButton } from './Button.styles'

function Button({ content, onClick, buttonType }: IButtonProps) {
    
  return (
    <StyledButton type={buttonType} onClick={onClick}>{content}</StyledButton>
  )
}

export default Button