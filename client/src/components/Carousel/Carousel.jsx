import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import bmx from "../../assets/images/pexels-jan-kopřiva-3281020.jpg";
import fixie from "../../assets/images/beachFixie.jpg";
import offRoad from "../../assets/images/marek-piwnicki-1zv1p3jvDBo-unsplash.jpg";

class ControlledCarousel extends Component {
  state = {
    index: 0,
  };
  //   const [index, setIndex] = useState(0);

  handleSelect = (selectedIndex, e) => {
    this.setState({ index: selectedIndex });
  };
  render() {
    return (
      <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={bmx} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={fixie} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={offRoad} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel;
