import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import { propTypes } from "react-bootstrap/esm/Image";

const MyNav = (props) => (
  <Navbar
    id="jumbotron"
    variant="light"
    fixed="top"
    // style={{ backgroundColor: "#F9F6D4" }}
    className="d-flex justify-content-between"
  >
    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
    <Nav id="jumbotron" className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Browse</Nav.Link>
    </Nav>
  </Navbar>
);

export default MyNav;
