import React, { Component } from "react";
import {
  Nav,
  Form,
  FormControl,
  Button,
  // Card,
  // CardDeck,
} from "react-bootstrap";

export class Catgegories extends Component {
  render() {
    return (
      <section>
        <div className="sub-nav">
          <Nav className="sub-nav__links" activeKey="/home">
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
          <div className="shop__container">
            <h3> stuff here</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default Catgegories;
