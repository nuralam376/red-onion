import React, { useRef } from "react";
import { Button, FormControl, Image } from "react-bootstrap";

const CartItem = ({ food, index, removeCartFood, handleQuantity }) => {
  const { id, image, name, price, totalOrdered, totalPrice } = food;

  const totalRef = useRef();

  return (
    <tr>
      <td>{index + 1}</td>
      <td className="w-25">
        <Image src={image} className="w-25" />
      </td>
      <td>{name}</td>
      <td>{price.toFixed(2)}</td>
      <td>
        {" "}
        <FormControl
          componentclass={"input"}
          type={"number"}
          ref={totalRef}
          step={"1"}
          min={1}
          defaultValue={totalOrdered}
          className="w-25 d-inline"
          onClick={() => handleQuantity(id, totalRef.current.value)}
        />
      </td>
      <td>{totalPrice.toFixed(2)}</td>
      <td>
        <Button className="btn btn-danger" onClick={() => removeCartFood(id)}>
          Remove
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;
