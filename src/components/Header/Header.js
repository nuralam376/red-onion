import React from "react";
import { Navbar, Nav, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

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
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
