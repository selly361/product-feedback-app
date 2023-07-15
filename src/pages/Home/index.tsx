import { Main } from "components"
import React from 'react'
import { SideBar } from 'components'
import { StyledHome } from './Home.styles'

const Home = () => {
  return (
    <StyledHome>
      <SideBar />
      <Main />
    </StyledHome>
  )
}

export default Home