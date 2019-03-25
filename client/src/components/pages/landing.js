import React from 'react';
// import { Link } from 'react-router-dom'
// import './landing.css'
import Navbar from '../navbar'
import Sidebar from '../sidebar'

class Landing extends React.Component {
    state = {}

    render() {
        return (
            <div className='page landing'>
            <Navbar />
                <Sidebar />
            <h1>Landing Page</h1>
                </div>
        )
    }
}

export default Landing;