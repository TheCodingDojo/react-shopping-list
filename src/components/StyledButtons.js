import styled from "styled-components";

export const BtnPrimary = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid slateblue;
  border-radius: 3px;
  background: transparent;
  &:hover {
    background: slateblue;
  }
`;

export const BtnWarning = styled.button`
  margin-top: 15px;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid orange;
  border-radius: 3px;
  background: transparent;
  &:hover {
    background: orange;
  }
`;
