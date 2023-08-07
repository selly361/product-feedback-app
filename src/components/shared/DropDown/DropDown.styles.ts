import styled from "styled-components";

export const Container = styled.button`
  height: 48px;
  width: 100%;
  background: #f7f8fd;
  padding: 24px 13px 22px 13px;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: 0.5s ease border;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  &:focus {
    border-color: #4661e6;
  }

  & > div {
    height: max-content;
    width: 456px;
    left: 0;
    right: 0;
    z-index: 1000;
  }
  
`;

export const Selected = styled.p`
  color: #3a4374;
  font-size: 15px;
  font-weight: 400;
  text-transform: capitalize;
`;
