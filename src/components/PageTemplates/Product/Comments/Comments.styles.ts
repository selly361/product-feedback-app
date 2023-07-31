import styled from "styled-components";

export const StyledComments = styled.main`
  width: 100%;
  background-color: #fff;
  padding: 34px 24px;
  border-radius: 10px;

  display: grid;
  gap: 32px;
`;

export const StyledTitle = styled.h3`
  color: #3a4374;
`;

export const Container = styled.div`
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;
  position: relative;
  gap: 32px;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(140, 146, 179, 0.25);
  }

  &.replies::before {
    content: "";
    position: absolute;
    width: 1px;
    opacity: 0.10000000149011612;
    background: #647196;
    height: calc(100% - 195px);
    left: 20px;
    top: 63px;
  }
`;

export const RepliesContainer = styled.div`
  width: 100%;
  padding-left: 40px;
  display: grid;
  gap: 32px;
`;
