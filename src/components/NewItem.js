import React, { useState } from "react";

import { Grid, Row, ColShadow } from "./StyledGrid";
import { Input } from "./StyledInputs";
import { Title4 } from "./StyledTitles";
import { BtnPrimary } from "./StyledButtons.js";
import { Hr } from "./StyledHrs";

const NewItem = ({ addItem }) => {
  const defaultQuantity = 1,
    defaultPrice = 0,
    defaultCategory = "Misc";

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(defaultQuantity);
  const [price, setPrice] = useState(defaultPrice);
  const [category, setCategory] = useState(defaultCategory);

  function handleSubmit(e) {
    e.preventDefault();

    addItem({
      name,
      /**
       * Or fallback in case of deletion of default value since these are
       * optional metadata.
       */
      category: category || defaultCategory,
      quantity: +quantity || defaultQuantity,
      price: +price || defaultPrice,
      pending: true,
    });

    setName("");
    setQuantity(defaultQuantity);
    setPrice(defaultPrice);
    setCategory(defaultCategory);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row justifyContent="center">
          <ColShadow>
            <Title4 center>New Item</Title4>
            <Hr />
            <label>Name</label>
            <Input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />

            <label>Category</label>
            <Input
              value={category}
              type="text"
              onChange={(e) => setCategory(e.target.value)}
            />

            <label>Quantity</label>
            <Input
              value={quantity}
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
            />

            <label>Price</label>
            <Input
              value={price}
              type="number"
              onChange={(e) => setPrice(e.target.value)}
            />

            <div>
              <BtnPrimary disabled={name.length < 2}>Submit</BtnPrimary>
            </div>
          </ColShadow>
        </Row>
      </Grid>
    </form>
  );
};

export default NewItem;
