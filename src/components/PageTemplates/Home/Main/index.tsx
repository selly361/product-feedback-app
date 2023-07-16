import { Container, StyledMain } from './Main.styles'

import { Header } from "components"
import React from 'react'
import { useAppSelector } from "app/hooks"

function Main() {
    const suggestions = useAppSelector(state => state.filteredSuggestions);
  return (
    <StyledMain>
        <Header />
        
        <Container>

        </Container>
    </StyledMain>
  )
}

export default Main