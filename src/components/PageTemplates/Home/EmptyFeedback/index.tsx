import {
  StyledArticle,
  StyledEmptyFeedback,
  StyledParagraph,
  StyledTitle,
} from "./EmptyFeedback.styles";

import Button from "components/shared/Button";
import { EmptyIllustration } from "icons";
import { useNavigate } from "react-router-dom";

function EmptyFeedback() {
    const navigate = useNavigate()
  return (
    <StyledEmptyFeedback>
      <EmptyIllustration />
      <StyledArticle>
        <StyledTitle>There is no feedback yet.</StyledTitle>
        <StyledParagraph>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </StyledParagraph>
      </StyledArticle>
      <Button buttonType={1} onClick={() => navigate("/add")} content="+ Add Feedback" />
    </StyledEmptyFeedback>
  );
}

export default EmptyFeedback;
