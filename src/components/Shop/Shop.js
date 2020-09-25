import React, { useEffect, useState } from "react";
import Foods from "../Foods/Foods";
import "./Shop.css";
import foodData from "../foodData/foodData";
import { Button, Container } from "react-bootstrap";

const Shop = () => {
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState("lunch");

  useEffect(() => {
    const allFoods = foodData.filter((food) => food.category === category);
    setFoods(allFoods);
  }, [category]);

  return (
    <div className="shop">
      <div className="category p-5">
        <Button
          className={`mr-5 btn btn-link bg-light ${
            category === "breakfast" && "active"
          }`}
          onClick={() => setCategory("breakfast")}
        >
          Breakfast
        </Button>
        <Button
          className={`mr-5 btn btn-link bg-light ${
            category === "lunch" && "active"
          }`}
          onClick={() => setCategory("lunch")}
        >
          Lunch
        </Button>
        <Button
          className={`mr-5 btn btn-link bg-light ${
            category === "dinner" && "active"
          }`}
          onClick={() => setCategory("dinner")}
        >
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
