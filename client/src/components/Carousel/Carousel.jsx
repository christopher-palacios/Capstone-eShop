import React, { useState } from "react";
import "./Carousel.scss";
import { Carousel } from "react-bootstrap";
import bmx from "../../assets/images/rideBMX.jpg";
import fixie from "../../assets/images/beachFixie.jpg";
import offRoad from "../../assets/images/offroad.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="hero" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100 hero__img" src={bmx} alt="First slide" />
        <Carousel.Caption className="hero__cap">
          <h1 className="hero__cap--title">BMX Bikes</h1>
          <h3 className="hero__cap--text">
            Browse our entire range of BMX bikes
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 hero__img"
          src={fixie}
          alt="Second slide"
        />

        <Carousel.Caption className="hero__cap">
          <h1 className="hero__cap--title">Fixie Bikes</h1>
          <h3 className="hero__cap--text">
            The best selection of Fixed gear bikes on the web
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 hero__img"
          src={offRoad}
          alt="Third slide"
        />

        <Carousel.Caption className="hero__cap">
          <h1 className="hero__cap--title">Off Road Bikes</h1>
          <h3 className="hero__cap--text">
            Hit the trails on an Off Road bike
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
