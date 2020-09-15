import React from "react";
import { Navbar, Nav, Image, Container } from "react-bootstrap";

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">
					<Image
						src="https://i.ibb.co/4NZspmC/logo.png"
						alt="logo"
						className="w-25"
						border="0"
					/>
				</Navbar.Brand>
				<Nav className="ml-auto">
					<Nav.Link href="#home">Cart</Nav.Link>
					<Nav.Link href="#features">Login</Nav.Link>
					<Nav.Link href="#pricing">Signup</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
