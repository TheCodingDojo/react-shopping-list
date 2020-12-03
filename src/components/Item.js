import { WrapperShadow } from "./StyledWrappers";
import { BtnWarning } from "./StyledButtons";

const Item = ({ item, setItemToEdit }) => {
  const { name, quantity, price } = item;

  return (
    <WrapperShadow>
      <h4>{name}</h4>
      <p>Quantity: {quantity}</p>
      <p>Price: {price}</p>
      <BtnWarning onClick={(e) => setItemToEdit(item)}>Edit</BtnWarning>
    </WrapperShadow>
  );
};

export default Item;
