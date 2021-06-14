import React, { useContext, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ControlledCarousel from "../../components/Carousel/Carousel";
import "./Home.scss";
import { AppContext } from "../../AppContext/AppContext";
// import axios from "axios";

// const baseUrl = "http://localhost:8080/api";

function Home() {
  const { categoryList } = useContext(AppContext);
  useEffect(() => {}, []);
  return (
    <section className="home">
      <div className="home__carousel">
        <ControlledCarousel />
      </div>
      <Card className="text-center home__feat">
        <Card.Header className="home__feat--head">Categories</Card.Header>
        <Card.Body className="home__feat--body">
          {/* <Card.Title className="home__feat--title">Shop By</Card.Title> */}
          <Card.Text className="home__feat--text">
            Shop our categoriess below
          </Card.Text>
          <Link to="/categories">
            <Button className="home__feat--button" variant="primary">
              Shop Now
            </Button>
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted home__feat--foot">
          {categoryList?.map((cat) => {
            return (
              <Link key={cat._id} to={`/categories/${cat._id}`}>
                {cat.name}
              </Link>
            );
          })}
        </Card.Footer>
      </Card>
      <div className="home__random">
        <div className="home__random--card"></div>
      </div>
    </section>
  );
}

export default Home;
