import styled from "styled-components";

export const StyledBackButton = styled.button`
  width: max-content;
  max-height: 30px;
  min-height: 30px;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 15px;
  color: #647196;
  font-size: 14px;
  font-weight: 700;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    margin: auto;
    height: 1px;
    width: 0;
    transition: .5s ease width, .5s ease background;
    background: #647196;
    
    
  }

  &:hover::before {
    width: 100%;
  }
`;


