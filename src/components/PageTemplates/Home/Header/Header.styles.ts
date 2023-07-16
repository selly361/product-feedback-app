import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 825px;
  height: 72px;

  border-radius: 10px;
  background-color: #373f68;
  padding: 24px 14px 16px 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 38px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  h3 {
    color: white;
  }
`;

export const SortButton = styled.span`
  color: #f2f4fe;
  font-size: 14px;
  font-weight: 700;

  display: flex;
  gap: 9px;
  align-items: center;

  path {
    stroke: white;
  }

  svg {
    transition: 0.5s ease transform;
  }

  svg.active {
    transform: rotate(-180deg);
  }
`;

export const SortButtonContainer = styled(Container)`
  cursor: pointer;
  position: relative;

  height: 100%;
  margin-left: 22px;

  h4,
  span {
    transition: 0.5s ease opacity;
  }

  h4 {
    color: #f2f4fe;
    font-weight: 400;
  }

  &:hover h4,
  &:hover span {
    opacity: 0.75;
  }
`;

