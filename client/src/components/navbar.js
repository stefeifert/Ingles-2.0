import React from 'react';
import Auth from '../utils/Auth';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    state = {
      isLoggedIn : false
    }

    logout = () => {
      Auth.logOut(() => {
        this.setState({ isLoggedIn: false })
      });
    }

    render() {
        return (
            <div className='page Navbar'>
              <h3>Ingles</h3>
              <ul>
                  <li><a href='coupons'>Coupons</a></li>
                  <li><a href='about-us'>About Us</a></li>
              </ul>
              {Auth.isLoggedIn() ? (
                <ul>
                  <li><a href='shopping-list'>Saved Shopping List</a></li>
                  <li><button onClick={this.logout}>Logout</button></li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              )}
            </div>
        )
    }
}

export default Navbar;