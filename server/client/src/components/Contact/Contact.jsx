import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import Footer from "../Footer/Footer";
import "./Contact.scss";
import linkedin from "../../assets/icons/linkedin.png";
import github from "../../assets/icons/github.png";

function Contact() {
  return (
    <section className="contain">
      <div className="contact">
        <h1 className="contact__title"> Reach us at:</h1>
        <Container className="contact__contain">
          <Row className="contact__contain--row">
            <Col className="contact__contain__col">
              <a href="https://www.linkedin.com/in/christopher-palacios/">
                <Image
                  className="contact__contain--icon"
                  src={linkedin}
                  rounded
                />
              </a>
            </Col>
            <Col className="contact__contain__col">
              <a href="https://github.com/christopher-palacios">
                <Image
                  className="contact__contain--icon"
                  src={github}
                  rounded
                />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <Footer /> */}
    </section>
  );
}

export default Contact;
