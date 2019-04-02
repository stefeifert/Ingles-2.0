import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Bogos extends React.Component {
  state = {
    products: [],
    user:""
    
  };

    componentDidMount() {
    axios.get("/api/bogolist").then(res =>
      this.setState({
        products: res.data,
        user: res.user
      })
    );
  }

  
  render() {
    return (
      <Container className="page products">
        <h3>Claim Your Advantage Buys</h3>
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
                <Card.Title>{product.bogo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Advantage Buy! {product.price}
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>

                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label class="form-check-label" for="defaultCheck1">
                 Default checkbox
                  </label>

              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    );
  }
}



export default Bogos;
