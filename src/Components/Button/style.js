import styled from "styled-components";

export const WrapperButton = styled.div`
  width: 100%;
  margin: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

`;

export const Button = styled.button`
  margin: ${(props) => props.margin || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  cursor: pointer;
  outline: 0;
  border: 0;
  border-radius: 16px;
  transition: 0.6s linear;
  &:hover {
    background-color: #332e2e;
    color: white;
    font-size: 20px;
  }
`;
