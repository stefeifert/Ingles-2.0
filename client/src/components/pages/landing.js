import React from "react";
import Carousel from "../Carousel/Carousel";
import Container from "react-bootstrap/Container";
import "../Carousel/carousel.css";

const Landing = props => {
  return (
    <div>
      <h1>Home Page</h1>
      <Carousel />
    </div>
  );
};

export default Landing;
