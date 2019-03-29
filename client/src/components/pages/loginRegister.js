import React from "react";
import LoginForm from "../LoginForm";
import RegisterForm from "../register";
import Container from "react-bootstrap/Container";
import "../loginRegister.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class LoginAndRegister extends React.Component {
  state = {};

  render() {
    return (
      <Container>
          <div style={{marginTop:'50px'}}>
        <Row>
            <Col>
            <h2>Login</h2>
            <LoginForm />
          </Col>
          <Col>
          <h2>Register</h2>
            <RegisterForm />
          </Col>
        </Row>
        </div>
      </Container>
    );
  }
}

export default LoginAndRegister;
