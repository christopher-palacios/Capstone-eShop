import React, { useContext, useEffect } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ControlledCarousel from "../../components/Carousel/Carousel";
import "./Home.scss";
import { AppContext } from "../../AppContext/AppContext";
import Footer from "../../components/Footer/Footer";
// const baseUrl = "http://localhost:8080/api";

function Home() {
  const { categoryList } = useContext(AppContext);
  useEffect(() => {}, []);
  return (
    <>
      <section className="home">
        <div className="home__carousel">
          <ControlledCarousel />
        </div>
        <h2 className="home__title">Welcome to eShop</h2>
        <div className="home__shop">
          <Card className="text-center home__feat">
            <Card.Header className="home__feat--title">Categories</Card.Header>
            <Card.Body className="home__feat--body">
              {/* <Card.Title className="home__feat--title">Shop By</Card.Title> */}
              <Card.Text className="home__feat--text">
                Shop categoriess below
              </Card.Text>
              <Link to="/categories">
                <Button className="home__feat--button" variant="primary">
                  Shop Now
                </Button>
              </Link>
            </Card.Body>
          </Card>
          <div className="home__categories">
            <div className="home__categories--card">
              <Card className="text-center">
                <Card.Header className="home__categories--title">
                  Featured
                </Card.Header>
                <ListGroup>
                  {categoryList?.map((cat) => {
                    return (
                      <Link
                        className="home__categories--link"
                        key={cat._id}
                        to={`/categories/${cat._id}`}
                      >
                        <ListGroup.Item className="home__categories--list-item">
                          {cat.name}
                        </ListGroup.Item>
                      </Link>
                    );
                  })}
                </ListGroup>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
