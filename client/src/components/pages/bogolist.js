import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import swal from "sweetalert";


class Bogos extends React.Component {
  
  constructor(props) {
    super(props);
    this.sweetalertfunction = this.sweetalertfunction.bind(this);
    
  }


  state = {
    products: [],
    user:""
    
  };

  sweetalertfunction(){
    console.log("button clicks")
    swal("Your Advantage Buys have been added to your Advantage Card Application!");
  }
 

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
        <button onClick={this.sweetalertfunction} type="submit" className='redBtn'>
           Claim Savings!
          </button>
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
               

                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label class="form-check-label" for="defaultCheck1">
                  Check here to claim your savings
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
