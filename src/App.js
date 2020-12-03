import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Container from "./components/Container";
import { Grid, Row, Col } from "./components/Grid";
import NewItem from "./components/NewItem";
import Item from "./components/Item";

function App() {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

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

  const ListTitle = styled.h3`
    text-align: center;
    margin-bottom: 15px;
    padding: 1rem;
    border-bottom: 1px solid ${(props) => props.bottomBorderColor || "black"};
    box-shadow: 0 5px 2px -2px rgba(0, 0, 0, 0.075);
  `;

  return (
    <Container>
      <GlobalStyle />
      <Title>Shopping List</Title>
      <hr />
      <NewItem addItem={addItem} />
      <Grid>
        <Row>
          <Col size={0.5}>
            <ListTitle bottomBorderColor="orange">Pending Items</ListTitle>
            {items
              .filter((item) => item.pending)
              .map((item, i) => (
                <Row justifyContent="center">
                  <Item key={i} item={item} setItemToEdit={setItemToEdit} />
                </Row>
              ))}
          </Col>
          <Col size={0.5}>
            <ListTitle bottomBorderColor="slateblue">Shopping Cart</ListTitle>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}

export default App;
