import React from 'react';
// import { Link } from 'react-router-dom'
// import './landing.css'
import Navbar from '../navbar'
import Sidebar from '../sidebar'

class AboutUs extends React.Component {
    state = {}

    render() {
        return (
            <div className='page AboutUs'>
                <Navbar />
                <Sidebar />
                <h1>About Us Page</h1>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/login'>Login Here</a></li>
                    <li><a href='products'>Product List</a></li>
                    <li><a href='coupons'>Coupons</a></li>
                    <li><a href='shopping-list'>Saved Shopping List</a></li>
                    <li><a href='about-us'>About Us</a></li>
                </ul>
            </div>
        )
    }
}

export default AboutUs;