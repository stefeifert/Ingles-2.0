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
            </div>
        )
    }
}

export default LoginAndRegister;