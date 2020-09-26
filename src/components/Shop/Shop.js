import React, { createContext, useEffect, useState } from "react";
import Foods from "../Foods/Foods";
import "./Shop.css";
import { Container } from "react-bootstrap";
import Categories from "../Categories/Categories";
import foodData from "../foodData/foodData";
import Banner from "../Banner/Banner";

export const CategoryContext = createContext();

const Shop = () => {
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState("lunch");

  useEffect(() => {
    const allFoods = foodData.filter((food) => food.category === category);
    setFoods(allFoods);
  }, [category]);

  return (
    <div className="shop">
      <CategoryContext.Provider value={[category, setCategory]}>
        <Banner />
        <Categories />
        <Container className="d-flex flex-wrap justify-content-center">
          {foods.map((food) => (
            <Foods key={food.id} food={food} />
          ))}
        </Container>
      </CategoryContext.Provider>
    </div>
  );
};

export default Shop;
