import styled from "styled-components";

export const StyledDropDown = styled.div`
  width: 255px;
  height: 192px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.35);

  & > *:not(:last-child) {
    border-bottom: 1px solid rgba(58, 67, 116, 0.15);
  }

  position: absolute;
  top: calc(50% + 42px);

`;

export const SubContainer = styled.div`
  height: 47px;
  width: 100%;
  padding: 12px 24px 12px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover h5 {
    color: #ad1fea;
  }
`;

export const Selector = styled.h5`
  color: #647196;
  font-size: 16px;
  font-weight: 400;
`;

