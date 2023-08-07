import { Buttons, EditIcon, StyledEditForm } from "./EditFeedbackForm.styles";
import {
  Description,
  Error,
  StyledFieldset,
  StyledInput,
  StyledLabel,
  StyledTextarea,
  SubContainer,
} from "components/shared/Styles/Form";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useNavigate, useParams } from "react-router-dom";

import Button from "components/shared/Button";
import DropDown from "components/shared/DropDown";
import { deleteProduct } from "features/product-feedback-app/productFeedbackSlice";
import { useFeedbackForm } from "hooks";

function EditFeedbackForm() {
 
  const { register, isValid, errors, handleSubmit, setValue, watch } = useFeedbackForm()

  const navigate = useNavigate()
  const dispatch = useAppDispatch()  

  const { roadmap, suggestions } = useAppSelector((state) => state);
  const { id } = useParams()



  const product = [...suggestions, ...roadmap].find(
    (product) => product.id === id
  );

  return (
    <StyledEditForm
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
    >
      <EditIcon />
      <h1>Editing `{product?.title}`</h1>

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
        <StyledLabel htmlFor="feedbackCategory">Update Status</StyledLabel>
        <Description>Change feedback state</Description>
        <DropDown
          type="status"
          current={watch("status")}
          set={(arg: string) => setValue("status", arg)}
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

      <SubContainer>
      <Button buttonType={4} content="Delete" onClick={() => {
        dispatch(deleteProduct(id as string))
        navigate("/")
      }} />  
      <Buttons>
        <Button buttonType={3} content="Cancel" onClick={() => navigate(-1)} />
        <Button
          buttonType={1}
          content="Edit Feedback"
          onClick={handleSubmit}
          disabled={!isValid}
        />
      </Buttons>
      </SubContainer>
    </StyledEditForm>
  );
}

export default EditFeedbackForm;
