import React, { Component } from 'react';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import Landing from './components/pages/landing';
import Products from './components/pages/products.js'
import AboutUs from './components/pages/aboutUs.js'
import Coupons from './components/pages/coupons.js'
import ShoppingList from './components/pages/shoppingList.js'

class App extends Component {

  state = {
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Route exact path='/' render={(props) => <Landing />} />
          <Route exact path='/products' render={(props) => <Products />} />
          <Route exact path='/about-us' render={(props) => <AboutUs />} />
          <Route exact path='/coupons' render={(props) => <Coupons />} />
          <Route exact path='/shopping-list' render={(props) => <ShoppingList />} />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App
