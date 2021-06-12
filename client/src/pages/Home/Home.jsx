import React, { useContext, useEffect, useState } from "react";
import { Card, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import ControlledCarousel from "../../components/Carousel/Carousel";
import "./Home.scss";
import { AppContext } from "../../AppContext/AppContext";
import axios from "axios";

const baseUrl = "http://localhost:8080/api";

function Home() {
  const [randomItems, setRandomItems] = useState([]);
  const { categoryList } = useContext(AppContext);

  const getRandom = () => {
    const randomIndex = Math.floor(Math.random() * categoryList.length);
    const randomId = categoryList[randomIndex]?._id;
    axios.get(`${baseUrl}/categories/${randomId}`).then((res) => {
      setRandomItems(res.data);
    });
  };

  useEffect(() => {
    getRandom();
  }, []);

  console.log(randomItems);
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
          <Link
            onClick={getRandom}
            //  to="/categories"
          >
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
      <div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header}>
              Featured Products
            </Accordion.Toggle>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </section>
  );
}

export default Home;
