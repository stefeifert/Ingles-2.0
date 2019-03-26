import React from 'react';
// import { Link } from 'react-router-dom'
// import './landing.css'

class Navbar extends React.Component {
    state = {}

    render() {
        return (
            <div className='page Navbar'>
            <h3>This will be the navbar</h3>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/login'>Login Here</a></li>
                <li><a href='products'>Product List</a></li>
                <li><a href='coupons'>Coupons</a></li>
                <li><a href='shopping-list'>Saved Shopping List</a></li>
                <li><a href='store-locator'>Store Locator</a></li>
                <li><a href='about-us'>About Us</a></li>
            </ul>
                </div>
        )
    }
}

export default Navbar;