import { Container, ContentContainer, StyledProduct, SubContainer } from "./Product.styles";
import { Tag, UpvoteButton } from "components";
import { useLocation, useNavigate } from "react-router-dom";

import { CommentsIcon } from "icons";
import { IProductProps } from "./Product.types";
import { numberOfComments } from "utils";
import { useAppSelector } from "app/hooks";

function Product({ productReq }: IProductProps) {
  const username = useAppSelector((state) => state.currentUser.username);
    const navigate = useNavigate()

    const location = useLocation()

    const handleClick = () => {
      if(location.pathname === "/"){
        navigate(`product/${productReq.id}`)
      }
    }
    
  return (
    <StyledProduct onClick={handleClick}>
      <Container>
        <UpvoteButton
          productId={productReq.id}
          active={productReq.upvoted.includes(username)}
          upvotes={productReq.upvotes}
        />
        <ContentContainer>
          <h3>{productReq.title}</h3>
          <p>{productReq.description}</p>
          <Tag>{productReq.category}</Tag>
        </ContentContainer>
      </Container>
      <SubContainer>
        <CommentsIcon />
        <h5>{numberOfComments(productReq.comments)}</h5>
      </SubContainer>
    </StyledProduct>
  );
}

export default Product;
