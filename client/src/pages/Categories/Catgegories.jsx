import axios from "axios";
import wheelie from "../../assets/images/wheelie.jpeg";
import "./Categories.scss";
import React, { useState, useEffect } from "react";
import { Card, CardDeck } from "react-bootstrap";
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
      <div className="categories">
        <Card.Img src={wheelie}></Card.Img>
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
                      <Card.Body>
                        <Card.Title className="categories__card--title">
                          {cat.name}
                        </Card.Title>
                      </Card.Body>
                      <Card.Footer>
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
