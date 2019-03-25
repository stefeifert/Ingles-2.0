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
            </div>
        )
    }
}

export default AboutUs;