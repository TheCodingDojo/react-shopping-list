import styled from "styled-components";

const Item = ({ item, setItemToEdit }) => {
  const { name, quantity, price } = item;

  const Wrapper = styled.div`
    padding: 2rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    margin-bottom: 15px;
    border-radius: 3px;
    &:hover {
      background: whitesmoke;
    }
  `;

  const EditBtn = styled.button`
    margin-top: 15px;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid orange;
    border-radius: 3px;
    background: transparent;
    &:hover {
      background: orange;
    }
  `;

  return (
    <Wrapper>
      <h4>{name}</h4>
      <p>Quantity: {quantity}</p>
      <p>Price: {price}</p>
      <EditBtn onClick={(e) => setItemToEdit(item)}>Edit</EditBtn>
    </Wrapper>
  );
};

export default Item;
