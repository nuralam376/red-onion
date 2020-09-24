import React from "react";
import { Navbar, Nav, Image, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="https://i.ibb.co/4NZspmC/logo.png"
            alt="logo"
            className="w-25"
            border="0"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/cart">Cart</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
