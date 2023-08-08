import { styled } from "styled-components";


export const Container = styled.div`
  width: 100%;
    padding: 10px;
    border: 1px solid #fff;

`

export const IMG = styled.img`

width: 100%;
height: 500px;
object-fit: cover;
  
`;

export const P = styled.p`
font-size: ${props => props.fontSize};
text-transform: uppercase;
font-weight: bold;
`;
