import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 10px;
  border: 1px solid #CDCDCD;
  background: #f7f7f7;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition: .80s ease-in;

  &:hover {
    background-color: #44c0db;
    color: #fff;
    filter: brightness(100%);
  }
`