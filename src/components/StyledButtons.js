import styled from "styled-components";

export const BtnDefault = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid gray;
  border-radius: 3px;
  background: transparent;
  margin-top: 5px;
  &:not(:last-child) {
    margin-right: 5px;
  }
  &:hover {
    background: gray;
  }
`;

export const BtnPrimary = styled(BtnDefault)`
  border-color: slateblue;
  &:hover {
    background: slateblue;
  }
`;

export const BtnWarning = styled(BtnDefault)`
  border-color: orange;
  &:hover {
    background: orange;
  }
`;
