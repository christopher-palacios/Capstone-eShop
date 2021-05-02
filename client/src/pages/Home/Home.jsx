import React, { useContext, useEffect, useState } from "react";
import wheelie from "../../assets/images/wheelie.jpeg";
import { Card, CardDeck, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ControlledCarousel from "../../components/Carousel/Carousel";
import "./Home.scss";
import { AppContext } from "../../AppContext/AppContext";
import axios from "axios";

const baseUrl = "http://localhost:8080/api";

function Home() {
  const [random, setRandom] = useState();
  const { categoryList } = useContext(AppContext);
  console.log(categoryList);

  //first get random category id

  //then use category id to get product list &
  //save random product list to state with useEffect hook
  useEffect(() => {}, []);

  //then map through product list and get 4 random products
  console.log(random);
  return (
    <section className="home">
      {/* <div className="home__hero">
        <img className="home__hero--image" src={wheelie} fluid />
      </div> */}
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
            return <Link to={`/categories/${cat._id}`}>{cat.name}</Link>;
          })}
        </Card.Footer>
      </Card>
    </section>
  );
}

export default Home;
