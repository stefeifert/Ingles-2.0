import React from 'react';
import Auth from "../utils/Auth";
import UserContext from "../context/UserContext";

class Register extends React.Component {
  static contextType = UserContext;

  state = {
    username: '',
    password: ''
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();
    Auth.register(this.state.username, this.state.password, (response) => {
      this.context.setUser(response);
      this.props.history.push("/");
    })
  }

  render() {
    return (
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" placeholder="username" onChange={this.handleInput}/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="password" onChange={this.handleInput} />

        <button onClick={this.submitForm}>Register</button>
      </form>
    );
  }
}

export default Register;