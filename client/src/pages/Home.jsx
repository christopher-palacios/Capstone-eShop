import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./Home.scss";

export class Home extends Component {
  render() {
    return (
      <section className="home">
        <Jumbotron fluid>
          <Container className="home__hero one">
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
        </Jumbotron>
      </section>
    );
  }
}

export default Home;
