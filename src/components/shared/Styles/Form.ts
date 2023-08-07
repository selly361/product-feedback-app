import styled from "styled-components";

export const StyledForm = styled.form`
  width: 540px;
  height: 657px;
  background: #fff;
  border-radius: 10px;
  padding: 52px 42px 38px 42px;

  display: grid;
  gap: 24px;

  position: relative;
`;

export const StyledLabel = styled.label`
  color: #3a4374;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.194px;

  &.error {
    color: #d73737;
  }
`;

export const Error = styled.p`
  color: #d73737;
  font-size: 14px;
  font-weight: 400;
`;

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Description = styled.p`
  color: #647196;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
`;

export const StyledInput = styled.input`
  width: 100%;
`;

export const StyledFieldset = styled.fieldset``;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 96px;
  resize: none;
`;
