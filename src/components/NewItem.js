import React, { useState } from "react";
import styled from "styled-components";

import { Grid, Row, ColShadow } from "./Grid";
import Input from "./Input";

const NewItem = ({ addItem }) => {
  const defaultQuantity = 1,
    defaultPrice = 0;

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(defaultQuantity);
  const [price, setPrice] = useState(defaultPrice);

  function handleSubmit(e) {
    e.preventDefault();

    addItem({
      name,
      quantity: +quantity, // convert to num shorthand
      price: +price,
      pending: true,
    });

    setName("");
    setQuantity(defaultQuantity);
    setPrice(defaultPrice);
  }

  const Title = styled.h4`
    text-align: center;
  `;

  const Hr = styled.hr`
    margin: 10px 0;
  `;

  const Button = styled.button`
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid slateblue;
    border-radius: 3px;
    background: transparent;
  `;

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row justifyContent="center">
          <ColShadow>
            <Title>New Item</Title>
            <Hr />
            <label>Name</label>
            <Input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
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
              <Button disabled={name.length < 2}>Submit</Button>
            </div>
          </ColShadow>
        </Row>
      </Grid>
    </form>
  );
};

export default NewItem;
