import styled from "styled-components";

export const StyledUpVoteButton = styled.button`
  width: 40px;
  height: 53px;
  border-radius: 10px;
  background: #f2f4fe;
  display: grid;
  gap: 3px;
  place-items: center;

  &:hover {
    background: #cfd7ff;
  }



  &, p, svg {
    transition: .5s ease color, .5s ease background, .5s ease transform;
  }

  &.active {
    background: #4661E6;

    p {
    color: white;

    }
    
    svg {
        transform: rotate(-180deg);
    }

    path {
        stroke: white;
    }
  }
`;

export const Votes = styled.p`
  color: #3a4374;
  font-weight: 700;
  letter-spacing: -0.181px;
  
`;
