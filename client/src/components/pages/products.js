import React from "react";
// import { Link } from 'react-router-dom'
// import './landing.css'
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

class Products extends React.Component {
  state = {
    products: []
  };
  componentDidMount() {
    axios.get("/api/products").then(res =>
      this.setState({
        products: res.data
      })
    );
  }

  render() {
    return (
      <Container className="page products">
        <h1>Products Page</h1>
        <Row>
          {this.state.products.map(product => (
            <Card key={product._id} style={{ width: "18rem", margin: "2rem" }}>
              <Card.Img
                variant="top"
                height='auto'
                width='150px'
                src={
                  product.filename
                    ? require(`../images/prod-imgs/${product.filename}`)
                    : null
                }
              />
              <Card.Body>
                <Card.Title>{product.item}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Advantage Buy! {product.price}
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Products;
