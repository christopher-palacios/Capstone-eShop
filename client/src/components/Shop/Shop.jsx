import axios from "axios";
import React from "react";
import "./Shop.scss";
import { Nav, Form, FormControl, Button } from "react-bootstrap";

class Shop extends React.Component {
  state = {
    currentUser: null,
  };

  componentDidMount() {
    //make axios call to backend to get currentUser info and set it to state
    const token = sessionStorage.getItem("token");
    axios
      .get("/api/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        this.setState({ currentUser: res.data });
      });
  }

  render() {
    return (
      <section className="sub-nav">
        <Nav className="sub-nav__links" activeKey="/home">
          <Nav.Item>
            <Nav.Link className="sub-nav__links--tag" href="/home">
              Best Sellers
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="sub-nav__links--tag" eventKey="link-1">
              On Sale
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="sub-nav__links--tag" eventKey="link-2">
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
      </section>
    );
  }
}

export default Shop;
