import { buttonTypeVariants } from "constantParameters";
import styled from "styled-components";

export const StyledButton = styled.button<{ buttonType: 1 | 2 | 3 | 4 }>`
  background-color: ${(props) => buttonTypeVariants[props.buttonType].backgroundColor}; 
  transition: 1s ease background;
  
  &:hover {
    background-color: ${(props) => buttonTypeVariants[props.buttonType].hoverBackgroundColor};
  }
`;
