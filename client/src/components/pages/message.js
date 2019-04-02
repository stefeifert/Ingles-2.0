// import { Link } from 'react-router-dom'
// import './landing.css'
import axios from "axios";
import React from 'react';


export default class MessageList extends React.Component {
  state = {
    name: '',
    message: '',
    newMessage: '',
    newName: ''
  }


  componentDidMount(){}

  handleChange = event => {
    this.setState({ name: event.target.value, message: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      message: this.state.message
    };
    

    MessageList.submitForm = (e) => {
      e.preventDefault();
       axios.post("/api/message", {
         name: this.state.newName,
         message: this.state.newMessage
       })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
    
  }

  render() {
    return (
      <div>
        <h4>Send a message to your local store</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
            <br></br>
             <label for="comment">Comment:</label>
             <textarea class="form-control" rows="5" id="comment"></textarea>
          </label>
          <button onClick={this.submitForm} type="submit" >Add</button>
        </form>
      </div>
    )
  }
}
