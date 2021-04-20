import React, { Component } from "react";
import {
  Nav,
  Form,
  FormControl,
  Button,
  Card,
  CardDeck,
} from "react-bootstrap";

class OnSale extends Component {
  render() {
    return (
      <section>
        <div className="sub-nav">
          <Nav className="sub-nav__links">
            <Nav.Item>
              <Nav.Link className="sub-nav__links--tag" href="/shop/new">
                Whats New
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="sub-nav__links--tag" href="/shop/sale">
                On Sale
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="sub-nav__links--tag" href="/shop/categories">
                Categories
              </Nav.Link>
            </Nav.Item>
            <div className="sub-nav__form">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="sub-nav__form--input"
                />
                <Button className="sub-nav__form--button" variant="outline">
                  Search
                </Button>
              </Form>
            </div>
          </Nav>
        </div>
        <div className="shop">
          <div className="shop__cards">
            <CardDeck>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
        </div>
      </section>
    );
  }
}

export default OnSale;
