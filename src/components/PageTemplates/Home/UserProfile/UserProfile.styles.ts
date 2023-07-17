import { styled } from "styled-components";

export const StyledUserProfile = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`

export const StyledImage = styled.img`
    height: 40px;
    width: 40px;
    object-fit: contain;
    border-radius: 50%;
    cursor: pointer;
    transition: .5s ease border;
    border: 2px solid transparent;


    &:hover {
        border: 2px solid #FF7E1B;
    }
`

export const Username = styled.h5`
    font-weight: 700;
    color: #fff;

`