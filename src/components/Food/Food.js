import React, { useEffect, useState, useContext, useRef } from "react";
import {
  Alert,
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
import { UserContext } from "../../App";

const Food = () => {
  const { id } = useParams();
  const [food, setFood] = useState({});
  const { name, description, price, image } = food;
  const [, , cart, setCart] = useContext(UserContext);
  const [alert, setAlert] = useState(false);
  const totalRef = useRef();

  useEffect(() => {
    const selectedFood = foodData.find((food) => food.id === +id);
    setFood(selectedFood);
  }, [id]);

  const addToCart = (id) => {
    const newItem = {
      foodId: id,
      total: totalRef.current.value,
    };
    const newCart = [...cart, newItem];
    setCart(newCart);
    setAlert(true);
  };

  return (
    <Container className="mt-5">
      {alert && (
        <Alert className="w-50" variant="success">
          Food added to cart successfully
        </Alert>
      )}
      <Row>
        <Col>
          <h1>{name}</h1>
          <p>{description}</p>
          <h3 className="mt-3 mb-3">
            ${price} &nbsp;
            <FormControl
              componentclass={"input"}
              type={"number"}
              ref={totalRef}
              step={"1"}
              min={1}
              defaultValue={1}
              className="w-25 d-inline"
            />
          </h3>
          <p className="mt-4 mb-4">
            <Button className="btn btn-danger" onClick={() => addToCart(id)}>
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
