import React from "react";
// import { Link } from 'react-router-dom'
// import './landing.css'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class ShoppingList extends React.Component {
  state = {};

  render() {
    return (
      <div className="page ShoppingList">
        <h1>Shopping List Page</h1>
        <Container style={{ background: "green" }}>
          <Row>
            <Col style={{ background: "blue" }}>1 of 2</Col>
            <Col style={{ background: "yellow" }}>2 of 2</Col>
          </Row>

          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ShoppingList;
