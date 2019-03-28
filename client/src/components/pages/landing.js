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
            <h1>Home Page</h1>
            <Carousel />
        </div>
        </Container>
    )
};

export default Landing;