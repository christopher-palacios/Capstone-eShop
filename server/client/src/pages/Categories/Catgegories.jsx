import axios from "axios";
import "./Categories.scss";
// import clothes from "../../assets/images/clothes.jpg";
import man from "../../assets/images/mn.jpg";
import woman from "../../assets/images/wmn.jpg";
import jewel from "../../assets/images/jewel.jpg";
import tech from "../../assets/images/tech.jpg";

import React, { useState, useEffect } from "react";
import { Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:8080/api";

function Catgegories() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    axios.get(`/categories`).then((res) => {
      setCategoryList(res.data);
    });
  }, []);

  return (
    <section>
      <div className="categories">
        <h1>Categories</h1>
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
                      <Card.Body className="categories__card--body">
                        <Card.Title className="categories__card--title">
                          {cat.name}
                        </Card.Title>
                        <Card.Img
                          src={
                            cat.name === "Women's clothing"
                              ? woman
                              : cat.name === "Men's clothing"
                              ? man
                              : cat.name === "Jewelery"
                              ? jewel
                              : tech
                          }
                          className="categories__card--img"
                        />
                      </Card.Body>
                      <Card.Footer className="categories__card--foot">
                        <small className="text-muted">
                          {`Click here for more ${cat.name} bikes`}
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
