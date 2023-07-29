import styled from "styled-components";

export const StyledEmptyFeedback = styled.div`
  width: 100%;
  height: 600px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 48px;

  border-radius: 10px;
  background: #fff;
  
`;

export const StyledArticle = styled.article`
  text-align: center;
  width: 410px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledTitle = styled.h1`
  color: #3a4374;
  margin-top: 5.3px;
`;

export const StyledParagraph = styled.h5`
  color: #647196;
`;
