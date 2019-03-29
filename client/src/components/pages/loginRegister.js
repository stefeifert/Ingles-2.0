import React from "react";
// import { Link } from 'react-router-dom'
// import './landing.css'
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import LoginForm from "../LoginForm";
import RegisterForm from "../registerForm";
import Container from "react-bootstrap/Container";

class LoginAndRegister extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <h1>Login or Register</h1>
        <LoginForm />
        <RegisterForm />
      </Container>
    );
  }
}

export default LoginAndRegister;
