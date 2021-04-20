import axios from "axios";
import React from "react";
import "./Shop.scss";
import {
  Nav,
  Card,
  CardDeck,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

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
            <CardDeck className="shop__card">
              <Card className="shop__card--indv">
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

export default Shop;
