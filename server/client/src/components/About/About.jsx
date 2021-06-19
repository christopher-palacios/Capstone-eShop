import React from "react";
import "./About.scss";
import mongodb from "../../assets/icons/mongodb.png";
import express from "../../assets/icons/express.svg";
import react from "../../assets/icons/react.svg";
import nodejs from "../../assets/icons/nodejs.png";
import bootStrap from "../../assets/icons/bootstrap.svg";
import sass from "../../assets/icons/sass.svg";
import stripe from "../../assets/icons/stripe.svg";
import javascript from "../../assets/icons/javascript.svg";
import "./About.scss";
import Footer from "../Footer/Footer";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <>
      <section className="about">
        <h1 className="about__title">
          This application was built using:
          <br />
          <br />
          MERN stack, Bootstrap, Stripe, Sass
        </h1>
        <Container className="about__contain">
          <Row>
            <Col>
              <Image className="about__contain--icon" src={mongodb} rounded />
            </Col>
            <Col>
              <Image className="about__contain--icon" src={express} rounded />
            </Col>
            <Col>
              <Image className="about__contain--icon" src={react} rounded />
            </Col>
            <Col>
              <Image className="about__contain--icon" src={nodejs} rounded />
            </Col>
          </Row>
          <Row>
            <Col>
              <Image className="about__contain--icon" src={bootStrap} rounded />
            </Col>
            <Col>
              <Image className="about__contain--icon" src={sass} rounded />
            </Col>
            <Col>
              <Image className="about__contain--icon" src={stripe} rounded />
            </Col>
            <Col>
              <Image
                className="about__contain--icon"
                src={javascript}
                rounded
              />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default About;
