import "./Categories.scss";
import man from "../../assets/images/mn.jpg";
import woman from "../../assets/images/wmn.jpg";
import jewel from "../../assets/images/jewel.jpg";
import tech from "../../assets/images/tech.jpg";

import React, { useContext } from "react";
import { Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext/AppContext";

function Catgegories() {
  const { categoryList } = useContext(AppContext);

  return (
    <section>
      <div className="categories">
        <h1 className="categories__title">Categories</h1>
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
                          className="categories__card--img"
                          src={
                            cat.name === "Women's clothing"
                              ? woman
                              : cat.name === "Men's clothing"
                              ? man
                              : cat.name === "Jewelery"
                              ? jewel
                              : tech
                          }
                        />
                      </Card.Body>
                      <Card.Footer className="categories__card--foot">
                        <small className="text-muted">
                          {`Click here for more ${cat.name} `}
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
