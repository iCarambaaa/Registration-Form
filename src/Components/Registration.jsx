// import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Registration = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  return (
    <Row className="justify-content-center">
      <Col className="d-flex justify-content-center mt-5">
        <Container className="register m-5 p-4">
          <h2 className="text-center text-dark">
            Register here for more awesome features
          </h2>
          <br />

          <Form>
            <Form.Group className="mb-3" controlId="RegForm">
              <Row className="mb-3">
                <Form.Group as={Col} controlId="RegForm">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    minlength="2"
                    // onChange={(e) => handleInput("name", e.target.value)}
                    value={name}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control type="text" required minlength="3" />
                </Form.Group>
              </Row>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                pattern="^.*(?=.{8,})(?=.*\d)(?=.*[a-zA-Z]).*$"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" required pattern={confPassword} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Dear customer check me to receive spam mails all day every day "
              />
            </Form.Group>
            <br />
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
          <br />
        </Container>
      </Col>
    </Row>
  );
};

export default Registration;
