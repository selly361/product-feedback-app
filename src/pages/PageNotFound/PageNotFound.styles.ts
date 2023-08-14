import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledPageNotFound = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #dbaeff;
  justify-content: space-between;
  padding: 40px 0;

  svg {
    transform: scale(0.7);
    cursor: unset;
  }
`;

export const StyledMessage = styled.h1`
  color: #000;
  font-size: 64px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const StyledLink = styled(Link)`
  color: black;
  font-size: 20px;
  font-weight: 700;
  width: 158px;
  height: 44px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  text-decoration: none;
  transition: .5s ease outline;
  outline: 1px solid #AD1FEA;
    
`;
