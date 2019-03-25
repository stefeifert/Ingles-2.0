import React, { Component } from 'react';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import Landing from './components/pages/landing';

class App extends Component {

  state = {
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Route exact path='/' render={(props) => <Landing />} />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
