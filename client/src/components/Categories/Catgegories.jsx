import axios from "axios";
import "./Categories.scss";
import React, { Component } from "react";
import {
  Nav,
  Form,
  FormControl,
  Button,
  Card,
  CardDeck,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:8080/api";

class Catgegories extends Component {
  state = {
    catgegories: [],
  };
  componentDidMount() {
    //Get request for categories
    axios.get(`${baseUrl}/categories`).then((res) => {
      this.setState({ catgegories: res.data });
    });
  }

  render() {
    console.log(this.state.catgegories);
    console.log(this.props);
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
              <Nav.Link className="sub-nav__links--tag" href="/categories">
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
        <div className="categories">
          <div className="categories__container">
            {this.state.catgegories.map((cat) => {
              return (
                <div className="categories__card">
                  <Link
                    to={`/categories/${cat._id}`}
                    className="categories__card--link"
                  >
                    <CardDeck>
                      <Card className="categories__card--card">
                        <Card.Img
                          className="categories__card--image"
                          variant="top"
                          // src={}
                        />
                        <Card.Body>
                          <Card.Title>{cat.name}</Card.Title>
                          <Card.Text>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </Card.Footer>
                      </Card>
                    </CardDeck>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Catgegories;
