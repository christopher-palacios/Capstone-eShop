import React, { Component } from "react";
// import { Jumbotron, Container, Carousel } from "react-bootstrap";
import ControlledCarousel from "../components/Carousel/Carousel";
import "./Home.scss";

export class Home extends Component {
  render() {
    return (
      <section className="home">
        <div className="home__carousel">
          <ControlledCarousel />
        </div>
        {/* <Jumbotron className="home__one" fluid>
          <Container className="home__hero ">
            <h1>Fluid jumbotron</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container className="home__hero two">
            <h1>Fluid jumbotron</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container className="home__hero three">
            <h1>Fluid jumbotron</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron> */}
      </section>
    );
  }
}

export default Home;
