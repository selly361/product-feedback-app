import { BackButton, Button, Product } from "components";
import { useNavigate, useParams } from "react-router-dom";

import { StyledHeader } from "./Header.styles";

function Header() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleEditFeedback = () => {
    navigate(`/edit/${id}`, { replace: true });
  };

  return (
    <StyledHeader>
      <BackButton />
      <Button
        content="Edit Feedback"
        buttonType={2}
        onClick={handleEditFeedback}
      />
    </StyledHeader>
  );
}

export default Header;
