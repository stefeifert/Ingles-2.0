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
import '../styles.css'


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
                  ${product.price}
                </Card.Subtitle>
                <p className='redBtn'>Add to List</p>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Products;
