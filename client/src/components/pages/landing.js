import React from 'react';
import Navbar from '../navbar'
import Sidebar from '../sidebar'

const Landing = props => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1>Home Page</h1>
        </div>
    )
};

export default Landing;