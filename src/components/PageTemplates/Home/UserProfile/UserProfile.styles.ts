import { styled } from "styled-components";

export const StyledUserProfile = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    cursor: pointer;

    &:hover img {
        border: 2px solid #FF7E1B;
    }
`

export const StyledImage = styled.img`
    height: 40px;
    width: 40px;
    object-fit: contain;
    border-radius: 50%;
    transition: .5s ease border;
    border: 2px solid transparent;



`

export const Username = styled.h5`
    font-weight: 700;
    color: #fff;

`