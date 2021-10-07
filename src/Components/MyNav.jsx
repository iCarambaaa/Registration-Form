import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import { propTypes } from "react-bootstrap/esm/Image";
import { withRouter, Link } from "react-router-dom";

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
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/">
        About
      </Link>
      <Link className="nav-link" to="/register">
        Registration
      </Link>
    </Nav>
  </Navbar>
);

export default withRouter(MyNav);
