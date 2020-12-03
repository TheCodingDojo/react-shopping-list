import styled from "styled-components";

import { WrapperShadow } from "./StyledWrappers";
import { BtnWarning } from "./StyledButtons";

const TitleLineThrough = styled.h4`
  text-decoration: line-through;
`;

const Item = ({ item, setItemToEdit }) => {
  const { name, quantity, price, pending } = item;

  return (
    <WrapperShadow>
      {pending ? <h4>{name}</h4> : <TitleLineThrough>{name}</TitleLineThrough>}
      <p>Quantity: {quantity}</p>
      <p>Price: {price}</p>
      <BtnWarning onClick={(e) => setItemToEdit(item)}>Edit</BtnWarning>
    </WrapperShadow>
  );
};

export default Item;
