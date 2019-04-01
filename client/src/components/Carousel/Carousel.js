import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Container from 'react-bootstrap/Container';
import './carousel.css';

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Container className='carouselContainer'>

        
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100 img-size"
              src="/images/inglesHero_1sm.jpg"
              alt="First slide"
              id="imgBox"
            />
            <Carousel.Caption>
              <h3></h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-size"
              src="/images/inglesHero_2sm.jpg"
              alt="Second slide"
              id="imgBox"
            />
  
            <Carousel.Caption>
              <h3></h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-size"
              src="/images/inglesHero_3sm.jpg"
              alt="Third slide"
              id="imgBox"
            />
  
            <Carousel.Caption>
              <h3></h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </Container>
      );
    }
  }

  export default ControlledCarousel;