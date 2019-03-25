import React from 'react';
// import { Link } from 'react-router-dom'
// import './landing.css'
import Navbar from '../navbar'
import Sidebar from '../sidebar'

class Coupons extends React.Component {
    state = {}

    render() {
        return (
            <div className='page Coupons'>
            <Navbar />
                <Sidebar />
            <h1>Coupons Page</h1>
                </div>
        )
    }
}

export default Coupons;