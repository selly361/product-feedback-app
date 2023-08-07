import { EditFeedbackIcon } from "icons";
import { StyledForm } from "components/shared/Styles/Form";
import styled from "styled-components";

export const EditIcon = styled(EditFeedbackIcon)`
  position: absolute;
  top: -23px;
  left: 42px;
`;

export const Buttons = styled.div`
  width: max-content;
  display: flex;
  justify-content: end;
  gap: 16px;
  align-items: center;
`;

export const StyledEditForm = styled(StyledForm)`
  width: 540px;
  height: 822px;

  button:not(:last-child) {
    width: 93px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`