import { Container, ContentContainer, StyledProduct, SubContainer } from "./Product.styles";
import { Tag, UpvoteButton } from "components";

import { CommentsIcon } from "icons";
import { IProductProps } from "./Product.types";
import { useAppSelector } from "app/hooks";
import { useNavigate } from "react-router-dom";

function Product({ productReq }: IProductProps) {
  const username = useAppSelector((state) => state.currentUser.username);
    const navigate = useNavigate()

    
  return (
    <StyledProduct onClick={() => navigate(`/${productReq.id}`)}>
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
        <h5>{productReq.comments.length}</h5>
      </SubContainer>
    </StyledProduct>
  );
}

export default Product;
