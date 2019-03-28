import React from 'react';
import Navbar from '../navbar'
import Carousel from '../Carousel/Carousel';
import Container from 'react-bootstrap/Container';
import '../Carousel/carousel.css';
import Sidebar from '../sidebar';

const Landing = props => {
    return (
        <Container>
        <div>
            <Navbar />
            <Carousel />
            <h1>Home Page</h1>
        </div>
        </Container>
    )
};

export default Landing;