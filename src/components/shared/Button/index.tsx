import { IButtonProps } from './Button.types'
import { StyledButton } from './Button.styles'

function Button({ content, buttonType, ...props }: IButtonProps) {
    
  return (
    <StyledButton buttonType={buttonType} {...props}>{content}</StyledButton>
  )
}

export default Button