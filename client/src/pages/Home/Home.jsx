import React, { useContext } from "react";
import wheelie from "../../assets/images/wheelie.jpeg";
import { Card, CardDeck, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ControlledCarousel from "../../components/Carousel/Carousel";
import "./Home.scss";
import { AppContext } from "../../AppContext/AppContext";

function Home() {
  const { categoryList } = useContext(AppContext);
  console.log(categoryList);

  //first get random category
  //
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
      <Container>
        <CardDeck>
          <Card>
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
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
    </section>
  );
}

export default Home;
