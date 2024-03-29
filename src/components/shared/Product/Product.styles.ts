import styled from "styled-components";

export const StyledProduct = styled.a`
  width: 100%;
  background-color: white;
  min-height: 151px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;
  text-align: start;

  padding: 28px 32px 0 32px;

  display: flex;
  justify-content: space-between;
  

  &.active {
    cursor: pointer;
    
    h3 {
        transition: .5s ease color;
    }

  &:hover h3 {
    color: #4661E6;
  }

  &:focus-visible {
    outline: 2px dashed black;
  }
  
  
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
  align-items: start;
  gap: 40px;
  
`;

export const SubContainer = styled(Container)`
  gap: 8px;
  height: 100%;
  align-items: center;
  
  h5 {
    color: #3a4374;
    font-size: 16px;
    letter-spacing: -0.222px;
    font-weight: 700;

  }
`;
