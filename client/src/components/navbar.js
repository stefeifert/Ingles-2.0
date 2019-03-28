import React from "react";
import Auth from "../utils/Auth";
import "./navbar.css"
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {
    isLoggedIn: false
  };

  logout = () => {
    Auth.logOut(() => {
      this.setState({ isLoggedIn: false });
    });
  };

  render() {
    return (
      <div>
        <h3>
          <span style = {{ fontFamily: "Fira Sans", fontSize: 80, fontWeight: "bold", color: "#AD3F3F" }}> ingles 2.0 </span>
        </h3>

        <div>

          {Auth.isLoggedIn() ? (
            <div style = {{backgroundColor: "#EBC8B2"}}>
               <a href="/">Home</a> 
               <a href="products">Product List</a>
               <a href="shopping-list">Saved Shopping List</a>
               <a href="store-locator">Store Locator</a> 
               <a href="coupons">Coupons</a> 
              <a onClick={this.logout}>Logout</a>
            </div>
          ) : (
            <div style = {{backgroundColor: "#EBC8B2"}}>
              <a href="/">Home</a>
              <a href="products">Product List</a>
              <a href="shopping-list">Saved Shopping List</a>
              <a href="store-locator">Store Locator</a>
              <a href="coupons">Coupons</a>
              <a href="/login">Login Here</a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
