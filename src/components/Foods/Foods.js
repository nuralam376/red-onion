import React from "react";
import { Button, Card } from "react-bootstrap";

const Foods = (props) => {
	const { name, image, price, short_desc } = props.food;
	return (
		<>
			<Card style={{ width: "18rem" }} className="mr-5 mb-5">
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
