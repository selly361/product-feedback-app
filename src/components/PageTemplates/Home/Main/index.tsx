import { Container, StyledMain } from "./Main.styles";
import { EmptyFeedback, Header, Product } from "components";

import React from "react";
import { useAppSelector } from "app/hooks";

function Main() {
  const suggestions = useAppSelector((state) => state.filteredSuggestions);

  const isEmpty = suggestions.length === 0;

  return (
    <StyledMain>
      <Header />

      <Container>
        {isEmpty ? (
          <EmptyFeedback />
        ) : (
          suggestions.map((productReq) => (
            <Product key={productReq.id} productReq={productReq} />
          ))
        )}
      </Container>
    </StyledMain>
  );
}

export default Main;
