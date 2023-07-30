import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledAside = styled.aside`
  display: grid;
  gap: 24px;
  align-content: start;

  section {
    width: 255px;
    min-height: 137px;
    border-radius: 10px;
  }
`;

export const TopSection = styled.section`
  width: 255px;
  height: 137px;
  background: url("/suggestions/desktop/background-header.png") no-repeat;
  background-size: cover;
  padding: 20px 72px 28px 24px;

  * {
    color: #fff;
  }

  h6 {
    opacity: 0.75;
  }
`;

export const MiddleSection = styled.section`
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  padding: 24px 0 24px 24px;
`;

export const BottomSection = styled.section`
  background: #fff;
  padding: 19px 24px 24px 24px;
`;

export const StyledButton = styled.button`
  width: max-content;
  height: 30px;

  border-radius: 10px;
  background: #f2f4ff;
  color: #4661e6;
  font-size: 13px;
  font-weight: 600;

  padding: 5px 16px 6px 16px;
  display: grid;
  place-items: center;

  transition: 0.5s ease background, 0.5s ease color;

  &.active {
    color: #fff;
    background: #4661e6;
  }

  &:hover {
    background: #cfd7ff;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > div:first-child {
    margin-bottom: 16px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  h5 {
    font-weight: 400;
    color: #647196;
  }
`;

export const StyledLink = styled(Link)`
  color: #4661e6;
  font-size: 13px;
  font-weight: 600;
  text-decoration-line: underline;

  transition: 0.5s ease color;

  &:hover {
    color: #8397f8;
  }
`;

export const Dot = styled.div<{ type: "planned" | "in-progress" | "live" }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  background-color: ${(props) =>
    props.type === "planned"
      ? "#F49F85"
      : props.type === "in-progress"
      ? "#AD1FEA"
      : "#62BCFA"};
`;

export const Amount = styled.h5`
  color: #647196;
`;
