import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  Image,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import foodData from "../foodData/foodData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

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
          <h3 className="mt-3 mb-3">
            ${price} &nbsp;
            <FormControl
              componentClass={"input"}
              type={"number"}
              step={"1"}
              min={1}
              defaultValue={1}
              className="w-25 d-inline"
            />
          </h3>
          <p className="mt-4 mb-4">
            <Button className="btn btn-danger">
              <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> &nbsp; Add
            </Button>
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
