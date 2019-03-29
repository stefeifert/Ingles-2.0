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
            <div style = {{backgroundColor: "white", marginBottom: 30, display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
              
                <Link className = "navlink hvr-underline-from-center" to ="/">home</Link>       
                <Link className = "navlink hvr-underline-from-center" to ="products">product list</Link>
                <Link className = "navlink hvr-underline-from-center" to ="bogolist">bogos</Link>
                <Link className = "navlink hvr-underline-from-center" to ="store-locator">store locator</Link> 
                <Link className = "navlink hvr-underline-from-center" to ="coupons">coupons</Link> 
                <Link className = "navlink hvr-underline-from-center" to ="/" onClick={this.logout}>logout</Link>


            </div>
          ) : (
            <div style = {{backgroundColor: "white", marginBottom: 30, display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
              <Link className = "navlink hvr-underline-from-center" to ="/">home</Link> 
              <Link className = "navlink hvr-underline-from-center" to ="products">product list</Link>
              {/* <Link className = "navlink hvr-underline-from-center" to ="bogolist">bogo list</Link> */}
              <Link className = "navlink hvr-underline-from-center" to ="store-locator">store locator</Link>
              <Link className = "navlink hvr-underline-from-center" to ="coupons">coupons</Link>
              <Link className = "navlink hvr-underline-from-center" to ="/login">login advantage buys</Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
