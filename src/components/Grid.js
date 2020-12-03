// import React from "react";
import styled from "styled-components";

export const Grid = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  justify-content: ${({ justifyContent }) => justifyContent || "left"};
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  padding: 20px;
  border-radius: 3px;
`;

export const ColShadow = styled(Col)`
  box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.1);
`;
