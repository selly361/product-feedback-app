import styled from "styled-components";

export const StyledProduct = styled.div`
  width: 100%;
  background-color: white;
  height: 151px;
  border-radius: 10px;

  padding: 28px 32px 0 32px;

  display: flex;
  justify-content: space-between;
    cursor: pointer;

    h3 {
        transition: .5s ease color;
    }

  &:hover h3 {
    color: #4661E6;
  }
`;

export const ContentContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 4px;

  div {
    margin-top: 8px;
  }

  p {
    color: #647196;
    font-size: 16px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const SubContainer = styled(Container)`
  gap: 8px;

  h5 {
    color: #3a4374;
    font-size: 16px;
    letter-spacing: -0.222px;
    font-weight: 700;

  }
`;
