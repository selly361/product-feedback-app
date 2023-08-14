import { Arrow, ConfusedFace } from "icons";
import {
  StyledLink,
  StyledMessage,
  StyledPageNotFound,
} from "./PageNotFound.styles";

import { Button } from "components";

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <StyledMessage>404</StyledMessage>
      <ConfusedFace />
      <StyledLink to="/">
        <Arrow />
        Go Back
      </StyledLink>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
