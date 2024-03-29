import styled from "styled-components";

export const StyledAddComment = styled.fieldset`
  width: 100%;
  height: 246px;
  border-radius: 10px;
  background: #fff;
  padding: 34px 24px 32px 43px;

  display: grid;
  gap: 24px;
`;

export const StyledLabel = styled.label`
  color: #3a4374;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.25px;
`;

export const StyledInput = styled.textarea`
  padding: 24px 16px;
  height: 80px;
  width: 100%;
  resize: none;
`;

export const NumberOfCharacters = styled.p`
  color: #647196;
  font-size: 15px;
  font-weight: 400;
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
