import axios from "axios";
import React from "react";
import "./Shop.scss";
import {
  Nav,
  Card,
  CardDeck,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const baseUrl = "http://localhost:8080/api";

class Shop extends React.Component {
  state = {
    currentUser: null,
    selectedCategory: [],
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`${baseUrl}/categories/${id}`).then((res) => {
      this.setState({ selectedCategory: res.data });
    });

    //axios call to backend to get currentUser info and set it to state
    // const token = sessionStorage.getItem("token");
    // axios
    //   .get(`${baseUrl}/users/current`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((res) => {
    //     this.setState({ currentUser: res.data });
    //   })
    //   .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.selectedCategory);
    return (
      <section>
        <div className="sub-nav">
          <Nav className="sub-nav__links" activeKey="/home">
            <Nav.Item>
              <Nav.Link className="sub-nav__links--tag" href="/categories/:id">
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
        <div className="shop">
          <div className="shop__container">
            <CardDeck className="shop__card">
              {this.state.selectedCategory.map((item) => {
                return (
                  <Card className="shop__card--indv" key={item._id}>
                    <Card.Body>
                      <Card.Link
                        className="shop__card--top"
                        href={`/product/${item._id}`}
                      >
                        <Card.Img variant="top" src={item.image} />
                      </Card.Link>
                    </Card.Body>
                    <Card.Footer>
                      <Card.Title>{item.name}</Card.Title>

                      <small className="text-muted">
                        <Card.Text>{item.price}</Card.Text>
                      </small>
                    </Card.Footer>
                  </Card>
                );
              })}
            </CardDeck>
          </div>
        </div>
      </section>
    );
  }
}

export default Shop;
