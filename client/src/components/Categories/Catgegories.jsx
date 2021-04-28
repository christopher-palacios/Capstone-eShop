import axios from "axios";
import "./Categories.scss";
import React, { useState, useEffect } from "react";
import {
  // Nav,
  // Form,
  // FormControl,
  // Button,
  Card,
  CardDeck,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:8080/api";

function Catgegories() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/categories`).then((res) => {
      setCategoryList(res.data);
    });
  }, []);

  return (
    <section>
      {/* <div className="sub-nav">
          <Nav className="sub-nav__links" activeKey="/home">
            {this.state.categoryList?.map((link) => {
              return (
                <Nav.Item key={link._id}>
                  <Nav.Link
                    className="sub-nav__links--tag"
                    href={`/categories/${link._id}`}
                  >
                    {link.name}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
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
        </div> */}
      <div className="categories">
        <div className="categories__container">
          {categoryList?.map((cat) => {
            return (
              <div key={cat._id} className="categories__card">
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
                          natural lead-in to additional content. This content is
                          a little bit longer.
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
  // }
}

export default Catgegories;
