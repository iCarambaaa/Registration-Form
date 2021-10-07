import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Button } from "react-bootstrap";

import fantasy from "../imports/fantasy.json";
import scifi from "../imports/scifi";
import history from "../imports/history";
import horror from "../imports/horror";
import romance from "../imports/romance";
import reactDom from "react-dom";

function LatestRelease() {
  console.log(fantasy);
  return (
    <div className="d-flex flex-wrap space justify-content-around">
      {fantasy.map((book) => (
        <Card
          id="jumbotron"
          key={book.asin}
          className="my-3"
          style={{
            width: "19%",
            opacity: "0.85",
            boxShadow: "5px 10px 18px #888888",
          }}
        >
          <Card.Img className="cardImg" variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
          <ListGroup id="jumbotron" className="list-group-flush">
            <ListGroupItem id="jumbotron">
              {book.category.charAt(0).toUpperCase() + book.category.slice(1)}
            </ListGroupItem>
            <ListGroupItem id="jumbotron">${book.price}</ListGroupItem>
            <ListGroupItem
              id="jumbotron"
              className="d-flex justify-content-between"
            >
              {" "}
              <Button className="m-2 px-4" variant="success">
                <big> &#128722; </big>
              </Button>
              <Button className="m-2 px-4" variant="info">
                <big>&#8505;</big>
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      ))}
    </div>
  );
}

export default LatestRelease;
