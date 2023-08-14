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
  font-weight: 400;
  width: max-content;
  height: 40px;
  border-radius: 10px;
  text-decoration: none;
    
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: relative;


   &::after, &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -8px;
    right: 0;
    background-color: #000;
    transition: .5s ease width;
    
   }

   &::before {
    left: 0;
    right: auto;
    bottom: auto;
    top: -8px;
   }

   &:hover::after, &:hover::before {
    width: 0;
   }

   
`;
