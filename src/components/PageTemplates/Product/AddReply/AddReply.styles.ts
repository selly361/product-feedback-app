import styled from "styled-components";

export const StyledAddReply = styled.div`
  width: 100%;
  height: 80px;
  grid-row: 3;
  grid-column: span 2;
  
  display: flex;
  align-items: start;
  gap: 16px;
`;

export const StyledTextarea = styled.textarea`
  width: calc(100% - 133px);
  height: 80px;

  resize: none;
`;
