import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import CartItem from "../CartItem/CartItem";
import allFoods from "../foodData/foodData";

const Cart = () => {
  const [, , cart, setNewCart] = useContext(UserContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const newFood = cart.map((food) => {
      const foodData = allFoods.find((fd) => fd.id === +food.foodId);
      foodData.totalOrdered = food.total;
      foodData.totalPrice = foodData.price * foodData.totalOrdered;
      return foodData;
    });

    setFoods(newFood);
  }, [cart]);

  const removeCartFood = (id) => {
    let confirmDelete = window.confirm("Are you sure?");
    if (confirmDelete) {
      const remainingFoods = foods.filter((food) => food.id !== id);
      setFoods(remainingFoods);
    }
  };

  const handleQuantity = (id, quantity) => {
    const modifiedFoodIndex = foods.findIndex((food) => food.id === id);
    const modifiedFood = foods.find((food) => food.id === id);
    const newFoods = [...foods];
    newFoods[modifiedFoodIndex] = {
      ...foods[modifiedFoodIndex],
      totalOrdered: +quantity,
      totalPrice: +quantity * modifiedFood.price,
    };

    setFoods(newFoods);
    setNewCart(newFoods);
  };

  return (
    <Container>
      <h1>Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Food</th>
            <th>Food Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {foods.length ? (
            foods.map((food, index) => (
              <CartItem
                key={food.id}
                food={food}
                index={index}
                removeCartFood={removeCartFood}
                handleQuantity={handleQuantity}
              />
            ))
          ) : (
            <tr>
              <td>
                No food added. <Link to="/shop">Added from Shop</Link>
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="4" className="text-center">
              Total Price
            </th>
            <td>$0</td>
          </tr>
          <tr>
            <th colSpan="4"></th>
            <td>
              <Button className="btn btn-info">Checkout</Button>
            </td>
          </tr>
        </tfoot>
      </Table>
    </Container>
  );
};

export default Cart;
