import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import ProtectedRoute from "./components/ProtectedRoute";
import UserContext from "./context/UserContext";
import Landing from "./components/pages/landing";
import Products from "./components/pages/products.js";
import Coupons from "./components/pages/coupons.js";
import LoginAndRegister from "./components/pages/loginRegister";
import Register from "./components/register";
import ShoppingList from "./components/pages/shoppingList.js";
import StoreLocator from "./components/pages/locator.js";
import AboutUs from "./components/pages/aboutUs.js";
import Navbar from "./components/navbar.js";
import Sidebar from "./components/sidebar.js";

class App extends Component {
  state = {
    user: null
  };

  setUser = user => {
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    const setUser = this.setUser;
    return (
      <React.Fragment>
        <BrowserRouter>
        <Navbar />
        <Sidebar />
        <div>
          <UserContext.Provider value={{ setUser: setUser, user: user }}>
            <Route exact path="/" component={Landing} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/coupons" component={Coupons} />
            <Route exact path="/login" component={LoginAndRegister} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/shopping-list" component={ShoppingList} />
            <Route exact path="/store-locator" component={StoreLocator} />
            <Route exact path="/about-us" component={AboutUs} />
          </UserContext.Provider>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
