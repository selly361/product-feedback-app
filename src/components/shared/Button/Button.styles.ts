import { buttonTypeVariants } from "consts";
import styled from "styled-components";

export const StyledButton = styled.button<{ type: 1 | 2 | 3 | 4 }>`
  background-color: ${(props) =>
    buttonTypeVariants[props.type].backgroundColor};
  transition: 1s ease background;

  &:hover, &:disabled {
    background-color: ${(props) =>
      buttonTypeVariants[props.type].hoverBackgroundColor};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
