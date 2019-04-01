import axios from "axios";
import React from "react";
import Container from "react-bootstrap/Container";

export default class MessageList extends React.Component {
  state = {
    name: "",
    message: "",
    newMessage: "",
    newName: ""
  };

  componentDidMount() {}

  handleChange = event => {
    this.setState({ name: event.target.value, message: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      message: this.state.message
    };

    MessageList.submitForm = e => {
      e.preventDefault();
      axios
        .post("/api/message", {
          name: this.state.newName,
          message: this.state.newMessage
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
        });
    };
  };

  render() {
    return (
      <Container>
        <h4 style={{marginTop:'50px'}}>Send a message to your local store</h4>
        <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder='Subject'
              name="name"
              onChange={this.handleChange}
              className="loginField"
              style={{width:'30%'}}
            />
            <textarea
              class="form-control"
              placeholder='Comment'
              rows="5"
              id="comment"
              className="loginField"
              style={{width:'30%'}}
            />
          <button onClick={this.submitForm} type="submit" className='redBtn'>
            Send
          </button>
        </form>
      </Container>
    );
  }
}
