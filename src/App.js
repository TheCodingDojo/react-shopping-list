import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

import Container from "./components/Container";
import { Title, TitleBorderBot } from "./components/StyledTitles";
import { Grid, Row, Col } from "./components/StyledGrid";
import NewItem from "./components/NewItem";
import Item from "./components/Item";

function App() {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

  function togglePending(selectedItem) {
    setItems(
      items.map((item) =>
        item === selectedItem
          ? { ...selectedItem, pending: !selectedItem.pending }
          : item
      )
    );
  }

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

  items.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );

  return (
    <Container>
      <GlobalStyle />
      <Title>Shopping List</Title>
      <hr />
      <NewItem addItem={addItem} />
      <Grid>
        <Row>
          <Col size={0.5}>
            <TitleBorderBot bottomBorderColor="orange">
              Pending Items
            </TitleBorderBot>
            {items
              .filter((item) => item.pending)
              .map((item, i) => (
                <Row key={i} justifyContent="center">
                  <div onClick={(e) => togglePending(item)}>
                    <Item item={item} setItemToEdit={setItemToEdit} />
                  </div>
                </Row>
              ))}
          </Col>
          <Col size={0.5}>
            <TitleBorderBot bottomBorderColor="slateblue">
              Shopping Cart
            </TitleBorderBot>
            {items
              .filter((item) => !item.pending)
              .map((item, i) => (
                <Row key={i} justifyContent="center">
                  <div onClick={(e) => togglePending(item)}>
                    <Item item={item} setItemToEdit={setItemToEdit} />
                  </div>
                </Row>
              ))}
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}

export default App;
