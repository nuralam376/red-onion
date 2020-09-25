import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import allFoods from "../foodData/foodData";

const Cart = () => {
  const [, , cart] = useContext(UserContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const newFood = cart.map((food) => {
      const foodData = allFoods.find((fd) => fd.id === +food.foodId);
      foodData.totalOrdered = food.total;
      return foodData;
    });

    const cartFoods = [...foods, newFood];
    setFoods(cartFoods);
  }, [cart, foods]);

  return (
    <div>
      {foods.map((food) => (
        <div key={food.id}>
          {food.name}
          {food.totalOrdered}
        </div>
      ))}
    </div>
  );
};

export default Cart;
