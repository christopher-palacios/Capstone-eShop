import React, { useState } from "react";
import "./Carousel.scss";
import { Carousel } from "react-bootstrap";
// import bmx from "../../assets/images/rideBMX.jpg";
// import fixie from "../../assets/images/beachFixie.jpg";
// import offRoad from "../../assets/images/offroad.jpg";
import clothes from "../../assets/images/clothing.jpg";
import jewelry from "../../assets/images/jewelry.jpg";
import electronics from "../../assets/images/electronics.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="hero" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 hero__img"
          src={clothes}
          alt="First slide"
        />
        <Carousel.Caption className="hero__cap">
          <h1 className="hero__cap--title">Clothing</h1>
          <h3 className="hero__cap--text">
            Browse our entire range of Women's and Men's clothing
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 hero__img"
          src={jewelry}
          alt="Second slide"
        />

        <Carousel.Caption className="hero__cap">
          <h1 className="hero__cap--title">Jewelry</h1>
          <h3 className="hero__cap--text">A unique selection of jewelry</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 hero__img"
          src={electronics}
          alt="Third slide"
        />

        <Carousel.Caption className="hero__cap">
          <h1 className="hero__cap--title">Electronics</h1>
          <h3 className="hero__cap--text">All new electronics available</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
