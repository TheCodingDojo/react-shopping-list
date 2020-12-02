// import React from "react";
import styled from "styled-components";

export const Grid = styled.div``;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
`;
