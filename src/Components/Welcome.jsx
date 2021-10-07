import Jumbotron from "react-bootstrap/jumbotron";
import Button from "react-bootstrap/button";
import { propTypes } from "react-bootstrap/esm/Image";
import { Container } from "react-bootstrap";

const Welcome = (props) => (
  <Container>
    <br />
    <Jumbotron
      id="jumbotron"
      style={{
        color: "black",
        marginTop: "50px",
        boxShadow: "5px 10px 18px #888888",
      }}
    >
      <h1>Hello, {props.greetingsName}!</h1>
      <p>{props.subTitle}</p>

      <Button variant="info">Learn more</Button>
    </Jumbotron>
    <br />
  </Container>
);

export default Welcome;
