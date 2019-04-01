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
          <h3 className = "ingles">
          <Link to="/">
            <span style = {{fontSize: 80, fontWeight: "bolder", color: "#AD3F3F", paddingLeft: 125 }}> ingles </span>
          </Link>
          </h3>
        <div>

          {Auth.isLoggedIn() ? (
            <div style = {{backgroundColor: "white", marginBottom: 30, display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                <Link className = "navlink hvr-underline-from-center" to ="bogolist">specials</Link>
                <Link className = "navlink hvr-underline-from-center" to ="message">message</Link>
                <Link className = "navlink hvr-underline-from-center" to ="products">products</Link>
                <Link className = "navlink hvr-underline-from-center" to ="store-locator">locations</Link>
                <Link className = "navlink hvr-underline-from-center" to ="coupons">coupons</Link>
                <Link className = "navlink hvr-underline-from-center" onClick={this.logout} to="/">logout</Link>
            </div>
          ) : (
            <div style = {{backgroundColor: "white", marginBottom: 30, display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                <Link className = "navlink hvr-underline-from-center" to ="products">products</Link>
                <Link className = "navlink hvr-underline-from-center" to ="store-locator">locations</Link>
                <Link className = "navlink hvr-underline-from-center" to ="coupons">coupons</Link>
                <Link className = "navlink hvr-underline-from-center" to ="/login">login</Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
