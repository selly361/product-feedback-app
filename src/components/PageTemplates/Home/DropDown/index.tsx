import { Selector, StyledDropDown, SubContainer } from './DropDown.styles'
import { useAppDispatch, useAppSelector } from 'app/hooks'

import { CheckIcon } from 'icons'
import { sort } from 'features/product-feedback-app/productFeedbackSlice'

function DropDown() {

    const sortPreference = useAppSelector(state => state.filterConfig.sortPreference)

    const dispatch = useAppDispatch()
    
    const check = (preference: string) => preference === sortPreference ? < CheckIcon /> : null


  return (
    <StyledDropDown>
        <SubContainer  onClick={() => dispatch(sort("Most Upvotes"))}>
            <Selector>Most Upvotes</Selector>
            {check("Most Upvotes")}
        </SubContainer>

        <SubContainer  onClick={() => dispatch(sort("Least Upvotes"))}>
            <Selector>Least Upvotes</Selector>
            {check("Least Upvotes")}
        </SubContainer>

        <SubContainer  onClick={() => dispatch(sort("Most Comments"))}>
            <Selector>Most Comments</Selector>
            {check("Most Comments")}
        </SubContainer>

        <SubContainer  onClick={() => dispatch(sort("Least Comments"))}>
            <Selector>Least Comments</Selector>
            {check("Least Comments")}
        </SubContainer>
    </StyledDropDown>
  )
}

export default DropDown