
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import ProtectedRoute from "./components/ProtectedRoute";
import UserContext from "./context/UserContext";
import Landing from './components/pages/landing';
import Products from './components/pages/products.js'
import Coupons from './components/pages/coupons.js'
import LoginAndRegister from './components/pages/loginRegister'
import Register from './components/register';
import ShoppingList from './components/pages/shoppingList.js'
import AboutUs from './components/pages/aboutUs.js'


class App extends Component {

  state = [
    { user: null }
  ]

  setUser = (user) => {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    const setUser = this.setUser;
    return (
      <React.Fragment>
        <BrowserRouter>
          <UserContext.Provider value={{ setUser: setUser, user: user }}>
            <Route exact path='/' component={Landing} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/coupons' component={Coupons} />
            <Route exact path='/login' component={LoginAndRegister} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/shopping-list' component={ShoppingList} />
            <Route exact path='/about-us' component={AboutUs} />
          </UserContext.Provider>
        </BrowserRouter>
      </React.Fragment>

    );
  }
}

export default App