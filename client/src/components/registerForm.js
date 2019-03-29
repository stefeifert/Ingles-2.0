import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
import Auth from "../utils/Auth";

class RegisterForm extends React.Component {
  static contextType = UserContext;

  state = {
    username: "",
    password: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    Auth.register(this.state.username, this.state.password, response => {
      this.context.setUser(response);
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <form>
        <label htmlFor="username" />
        <input
          id="username"
          name="username"
          placeholder="username"
          onChange={this.handleInput}
        />

        <label htmlFor="password" />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={this.handleInput}
        />

        <button onClick={this.submitForm}>Register</button>
      </form>
    );
  }
}

export default withRouter(RegisterForm);
