import React from 'react';
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import Carousel from '../Carousel/Carousel';

const Landing = props => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Carousel />
            <h1>Home Page</h1>
        </div>
    )
};

export default Landing;