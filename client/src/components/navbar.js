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
          <span style = {{ fontFamily: "Fira Sans", fontSize: 80, fontWeight: "bold", color: "#AD3F3F", paddingLeft: 60 }}> ingles 2.0 </span>
        </h3>

        <div>

          {Auth.isLoggedIn() ? (
            <div style = {{backgroundColor: "white"}}>
               <Link className = "navlink" to ="/">Home</Link> 
               <Link className = "navlink" to ="products">Product List</Link>
               <Link className = "navlink" to ="shopping-list">Saved Shopping List</Link>
               <Link className = "navlink" to ="store-locator">Store Locator</Link> 
               <Link className = "navlink" to ="coupons">Coupons</Link> 
              <Link className = "navlink"style = {{fontSize: 40, padding: 60}} onClick={this.logout}>Logout</Link>
            </div>
          ) : (
            <div style = {{backgroundColor: "white"}}>
              <Link className = "navlink" to ="/">Home</Link> 
              <Link className = "navlink" to ="products">Product List</Link>
              <Link className = "navlink" to ="shopping-list">Saved Shopping List</Link>
              <Link className = "navlink" to ="store-locator">Store Locator</Link>
              <Link className = "navlink" to ="coupons">Coupons</Link>
              <Link className = "navlink" to ="/login">Login Here</Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
