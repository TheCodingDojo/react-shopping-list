import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  margin: 15px 0;
`;

export const Title2BorderBot = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.bottomBorderColor || "black"};
  box-shadow: 0 5px 2px -2px rgba(0, 0, 0, 0.075);
`;

export const TitleCategory = styled.h3`
  text-align: center;
  color: ${({ color }) => color};
  text-decoration: underline;
  margin-bottom: 10px;
`;

export const Title4 = styled.h4`
  text-align: ${({ center, right }) =>
    (center && "center") || (right && "right") || "left"};
`;
