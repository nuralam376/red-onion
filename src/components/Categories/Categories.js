import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CategoryContext } from "../Shop/Shop";

const Categories = () => {
  const [category, setCategory] = useContext(CategoryContext);

  return (
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
  );
};

export default Categories;
