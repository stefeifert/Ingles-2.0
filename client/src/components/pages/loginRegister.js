import React from 'react';
// import { Link } from 'react-router-dom'
// import './landing.css'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import LoginForm from '../LoginForm'

class LoginAndRegister extends React.Component {
    state = {}

    render() {
        return (
            <div className='page LoginAndRegister'>
                <Navbar />
                <Sidebar />
                <h1>Login and Register Page</h1>
                <LoginForm />
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

export default LoginAndRegister;