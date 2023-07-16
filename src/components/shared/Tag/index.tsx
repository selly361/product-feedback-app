import { ITagProps } from './Tag.types'
import { StyledTag } from './Tag.styles'

function Tag({ children }: ITagProps) {
  return (
    <StyledTag>{children}</StyledTag>
  )
}

export default Tag