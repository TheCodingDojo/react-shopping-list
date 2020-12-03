import styled from "styled-components";

export const Input = styled.input`
  display: block;
  padding: 0.5em;
  margin: 0.5em 0 1em 0;
  border: 1px solid gray;
  background: whitesmoke;
  border-radius: 3px;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px blue;
  }
`;
