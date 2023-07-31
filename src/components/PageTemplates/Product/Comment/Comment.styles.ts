import styled from "styled-components";

export const StyledComment = styled.section`
  min-width: 100%;
  display: flex;
  gap: 32px;
  align-items: start;

  &.reply:last-child {
    padding-bottom: 32px;
  }

  &.reply > div {

  }
`;

export const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: contain;
`;

export const StyledName = styled.h4`
  letter-spacing: -0.194px;
`;

export const StyledUsername = styled.p`
  color: #647196;
  font-size: 14px;
`;

export const ReplyButton = styled.button`
  background-color: transparent;
  color: #4661e6;
  font-size: 13px;
  font-weight: 600;

  justify-self: end;
  width: max-content;
  height: 40px;
`;

export const Message = styled.p`
  width: 100%;

  color: #647196;
  font-size: 15px;
  font-weight: 400;

  grid-column: 1/3;
  grid-row: 2;
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template: auto auto auto / auto auto;
  row-gap: 17px;

  
`;

export const TinyContainer = styled.div`
  grid-area: 1/1/1/1;
`;

export const StyledReplyTo = styled.span`
  color: #ad1fea;
  font-size: 15px;
  font-weight: 700;
`;


export const SubContainer = styled.div`
  width: 100%;
`