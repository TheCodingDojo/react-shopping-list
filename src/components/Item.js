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
  const { name, description, points, category, pending } = item;

  const [editedName, setEditedName] = useState(name);
  const [editedCategory, setEditedCategory] = useState(category);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedPoints, setEditedPoints] = useState(points);

  function save(e) {
    e.preventDefault();

    const editedItem = {
      name: editedName,
      category: editedCategory,
      description: editedDescription,
      points: +editedPoints || 0,
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

          <label>description:</label>
          <Input
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />

          <label>Points:</label>
          <Input
            value={editedPoints}
            onChange={(e) => setEditedPoints(e.target.value)}
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
          <p>Description: {description}</p>
          <p>points: {points}</p>
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
