import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Container from "./components/Container";
import { Grid, Row, Col } from "./components/Grid";
import NewItem from "./components/NewItem";

function App() {
  const [items, setItems] = useState([]);

  // Since this is a small project, otherwise styled-reset pkg could be used.
  const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

  // To avoid having to both items and setItems as props of NewItem.
  const addItem = (item) => setItems([item, ...items]);

  const Title = styled.h1`
    text-align: center;
    margin-bottom: 15px;
  `;

  const TitleMd = styled.h3`
    text-align: center;
    margin-bottom: 15px;
  `;

  return (
    <Container>
      <GlobalStyle />
      <Title>Shopping List</Title>
      <hr />
      <NewItem addItem={addItem} />
      <Grid>
        <Row>
          <Col size={1}>
            <TitleMd>Pending Items</TitleMd>
          </Col>
          <Col size={1}>
            <TitleMd>Shopping Cart</TitleMd>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}

export default App;
