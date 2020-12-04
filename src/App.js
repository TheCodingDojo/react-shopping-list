import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";

import Container from "./components/Container";
import {
  Title,
  Title2BorderBot,
  TitleCategory,
} from "./components/StyledTitles";
import { Grid, Row, Col } from "./components/StyledGrid";
import { Input } from "./components/StyledInputs";
import { BtnPrimary } from "./components/StyledButtons";
import Item from "./components/Item";

function App() {
  const [items, setItems] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [itemToEdit, setItemToEdit] = useState(null);

  /**
   * Trigger the search whenever the searchName updates AND whenever
   * items update so that searchItems will include any newly added
   * items or edited items.
   */
  useEffect(() => {
    if (searchName) {
      setSearchItems(
        items.filter((item) =>
          item.name.toLowerCase().includes(searchName.toLowerCase())
        )
      );
    } else {
      setSearchItems(items);
    }
  }, [items, searchName]);

  function create(e) {
    e.preventDefault();

    const newItem = {
      name: searchName,
      price: 0,
      quantity: 1,
      category: "Misc",
      pending: true,
    };

    setItems([newItem, ...items]);
    setSearchName("");
  }

  function togglePending(selectedItem) {
    // so that clicks while editing don't accidentally move the item to other list
    if (itemToEdit) {
      return;
    }

    setItems(
      items.map((item) =>
        item === selectedItem
          ? { ...selectedItem, pending: !selectedItem.pending }
          : item
      )
    );
  }

  function saveEdit(originalItem, editedItem) {
    setItems(items.map((item) => (item === originalItem ? editedItem : item)));
    setItemToEdit(null);
  }

  searchItems.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );

  // Since this is a small project, otherwise styled-reset pkg could be used.
  const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

  let subTotal = 0;

  /**
   * Create a hash table of categories, could be done with a regular loop
   * instead of .reduce.
   * {
   *  "Cat One": [items, ...]
   *  "Cat Two": [items, ...]
   * }
   */
  const categoryTable = searchItems
    .filter((item) => item.pending)
    .reduce((table, item) => {
      subTotal += item.price;

      const titleCaseCat = item.category
        .toLowerCase()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");

      if (!table.hasOwnProperty(titleCaseCat)) {
        table[titleCaseCat] = [];
      }

      table[titleCaseCat].push(item);

      return table;
    }, {});

  const alphabeticalCategories = Object.keys(categoryTable).sort((a, b) =>
    a.localeCompare(b)
  );

  return (
    <Container>
      <GlobalStyle />

      <Title>Shopping List</Title>
      <hr />
      <Grid>
        <Row justifyContent="center">
          <Col>
            <form onSubmit={create}>
              <Input
                onChange={(e) => setSearchName(e.target.value)}
                value={searchName}
              />
              <BtnPrimary disabled={searchName.length < 2}>Create</BtnPrimary>
            </form>
          </Col>
        </Row>

        {/* Bottom row of two columns of pending list & crossed off list */}
        <Row>
          {/* Pending items */}
          <Col size={1}>
            <Title2BorderBot bottomBorderColor="orange">
              Pending Items
            </Title2BorderBot>
            <small>Subtotal: {subTotal}</small>

            {alphabeticalCategories.map((cat, catIdx) => {
              return (
                <section key={catIdx}>
                  <TitleCategory color="darkorange">{cat}</TitleCategory>
                  {/* row of category's items */}
                  <Row>
                    {categoryTable[cat].map((item, itemIdx) => (
                      <div key={itemIdx} onClick={(_e) => togglePending(item)}>
                        <Item
                          item={item}
                          itemToEdit={itemToEdit}
                          setItemToEdit={setItemToEdit}
                          saveEdit={saveEdit}
                        />
                      </div>
                    ))}
                  </Row>
                </section>
              );
            })}
          </Col>

          <Col size={1}>
            <Title2BorderBot bottomBorderColor="slateblue">
              Pending Items
            </Title2BorderBot>
            <Row>
              {searchItems
                .filter((item) => !item.pending)
                .map((item, i) => (
                  <div key={i} onClick={(_e) => togglePending(item)}>
                    <Item
                      item={item}
                      itemToEdit={itemToEdit}
                      setItemToEdit={setItemToEdit}
                      saveEdit={saveEdit}
                    />
                  </div>
                ))}
            </Row>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}

export default App;
