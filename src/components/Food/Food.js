import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import foodData from "../foodData/foodData";

const Food = () => {
  const { id } = useParams();
  const [food, setFood] = useState({});
  const { name, description, price, image } = food;

  useEffect(() => {
    const selectedFood = foodData.find((food) => food.id === +id);
    setFood(selectedFood);
  }, [id]);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>{name}</h1>
          <p>{description}</p>
          <h3>
            ${price} &nbsp;
            <input type="number" className="w-25 text-center" value="1" />
          </h3>
          <p>
            <Button className="btn btn-danger">Add</Button>
          </p>
          <p>
            <Image src={image} className="w-25" />
            <Image src={image} className="w-25" />
          </p>
        </Col>
        <Col>
          <Image src={image} className="w-75" />
        </Col>
      </Row>
    </Container>
  );
};

export default Food;
