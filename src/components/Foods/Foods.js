import React from "react";
import { Card } from "react-bootstrap";
import "./Foods.css";

const Foods = (props) => {
  const { name, image, price, short_desc } = props.food;
  return (
    <>
      <Card style={{ width: "18rem" }} className="mr-5 mb-5 p-3 b-0">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{short_desc}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ textAlign: "center" }}>${price}</Card.Footer>
      </Card>
    </>
  );
};

export default Foods;
