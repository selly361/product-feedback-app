import { Container, StyledMain } from './Main.styles'
import { Header, Product } from "components"

import React from 'react'
import { useAppSelector } from "app/hooks"

function Main() {
    const suggestions = useAppSelector(state => state.filteredSuggestions);
  return (
    <StyledMain>
        <Header />
        
        <Container>
          {suggestions.map(productReq => (
            <Product key={productReq.id} productReq={productReq} />
          ))}
        </Container>
    </StyledMain>
  )
}

export default Main