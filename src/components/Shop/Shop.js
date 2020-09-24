import React, { useEffect, useState } from "react";
import Foods from "../Foods/Foods";
import "./Shop.css";
import foodData from "../foodData/foodData";
import { Button, Container } from "react-bootstrap";

const Shop = () => {
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState("breakfast");

  useEffect(() => {
    const allFoods = foodData.filter((food) => food.category === category);
    setFoods(allFoods);
  }, [category]);

  return (
    <div className="shop">
      <div className="category p-5">
        <Button className="mr-5" onClick={() => setCategory("breakfast")}>
          Breakfast
        </Button>
        <Button className="mr-5" onClick={() => setCategory("lunch")}>
          Lunch
        </Button>
        <Button className="mr-5" onClick={() => setCategory("dinner")}>
          Dinner
        </Button>
      </div>
      <Container className="d-flex flex-wrap justify-content-center">
        {foods.map((food) => (
          <Foods key={food.id} food={food} />
        ))}
      </Container>
    </div>
  );
};

export default Shop;
