import React, { useState } from "react";
import styled from "styled-components";

import { WrapperShadow } from "./StyledWrappers";
import { BtnWarning, BtnPrimary, BtnDefault } from "./StyledButtons";
import { Input } from "./StyledInputs";

const WrapperShadowMargin = styled(WrapperShadow)`
  margin: 0 5px;
`;

const TitleLineThrough = styled.h4`
  text-decoration: line-through;
`;

const Item = ({ item, itemToEdit, setItemToEdit, saveEdit }) => {
  const { name, quantity, price, category, pending } = item;

  const [editedName, setEditedName] = useState(name);
  const [editedCategory, setEditedCategory] = useState(category);
  const [editedQuantity, setEditedQuantity] = useState(quantity);
  const [editedPrice, setEditedPrice] = useState(price);

  function save(e) {
    e.preventDefault();

    const editedItem = {
      name: editedName,
      category: editedCategory,
      quantity: +editedQuantity || 1,
      price: +editedPrice || 0,
      pending,
    };

    saveEdit(item, editedItem);
  }

  return (
    <WrapperShadowMargin>
      {item === itemToEdit ? (
        <form onSubmit={save}>
          <label>Name:</label>
          <Input
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />

          <label>Category:</label>
          <Input
            value={editedCategory}
            onChange={(e) => setEditedCategory(e.target.value)}
          />

          <label>Quantity:</label>
          <Input
            value={editedQuantity}
            onChange={(e) => setEditedQuantity(e.target.value)}
          />

          <label>Price:</label>
          <Input
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
          />

          <BtnPrimary
            disabled={editedName.length <= 1 || editedCategory.length <= 1}
          >
            Save
          </BtnPrimary>
          <BtnDefault onClick={(e) => setItemToEdit(null)}>Cancel</BtnDefault>
        </form>
      ) : (
        <>
          {pending ? (
            <h4>{name}</h4>
          ) : (
            <TitleLineThrough>{name}</TitleLineThrough>
          )}
          <p>Quantity: {quantity}</p>
          <p>Price: {price}</p>
          {!pending && <p>Category: {category}</p>}
          <BtnWarning
            onClick={(e) => {
              // stop the click event from triggering the parent's onClick
              e.stopPropagation();
              setItemToEdit(item);
            }}
          >
            Edit
          </BtnWarning>
        </>
      )}
    </WrapperShadowMargin>
  );
};

export default Item;
