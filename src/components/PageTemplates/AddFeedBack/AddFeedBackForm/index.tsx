import { AddIcon, Buttons } from "./AddFeedBackForm.styles";
import {
  Description,
  Error,
  StyledFieldset,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTextarea,
  SubContainer,
} from "components/shared/Styles/Form";

import Button from "components/shared/Button";
import DropDown from "components/shared/DropDown";
import { useFeedbackForm } from "hooks";
import { useNavigate } from "react-router-dom";

function AddFeedBackForm() {
 
  const { register, isValid, errors, handleSubmit, setValue, watch } = useFeedbackForm()

  const navigate = useNavigate()

  return (
    <StyledForm
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
    >
      <AddIcon />
      <h1>Create New Feedback</h1>

      <StyledFieldset>
        <SubContainer>
          <StyledLabel
            className={errors.title ? "error" : ""}
            htmlFor="feedbackTitle"
          >
            Feedback Title
          </StyledLabel>
          {errors.title ? <Error>Can't be empty</Error> : null}
        </SubContainer>
        <Description>Add a short, descriptive headline</Description>
        <StyledInput
          className={errors.title ? "error" : ""}
          id="feedbackTitle"
          {...register("title", { required: true })}
        />
      </StyledFieldset>

      <StyledFieldset>
        <StyledLabel htmlFor="feedbackCategory">Category</StyledLabel>
        <Description>Choose a category for your feedback</Description>
        <DropDown
          type="category"
          current={watch("category")}
          set={(arg: string) => setValue("category", arg)}
        />
      </StyledFieldset>

      <StyledFieldset>
        <SubContainer>
          <StyledLabel
            className={errors.description ? "error" : ""}
            htmlFor="feedbackDetail"
          >
            Feedback Detail
          </StyledLabel>
          {errors.description ? <Error>Can't be empty</Error> : null}
        </SubContainer>
        <Description>
          Include any specific comments on what should be improved, added, etc.
        </Description>
        <StyledTextarea
          className={errors.description ? "error" : ""}
          id="feedbackDetail"
          {...register("description", { required: true })}
        />
      </StyledFieldset>

      <Buttons>
        <Button buttonType={3} content="Cancel" onClick={() => navigate(-1)} />
        <Button
          buttonType={1}
          content="Add Feedback"
          onClick={handleSubmit}
          disabled={!isValid}
        />
      </Buttons>
    </StyledForm>
  );
}

export default AddFeedBackForm;
