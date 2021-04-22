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
    categoryList: [],
    search: "",
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`${baseUrl}/categories/${id}`).then((res) => {
      this.setState({ selectedCategory: res.data });
    });

    axios.get(`${baseUrl}/categories`).then((res) => {
      this.setState({ categoryList: res.data });
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
    console.log(this.state.categoryList);
    console.log(this.state.search);
    return (
      <section>
        <div className="sub-nav">
          <Nav className="sub-nav__links" activeKey="/home">
            {this.state.categoryList?.map((link) => {
              return (
                <Nav.Item>
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
                  onChange={this.handleChange}
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
              {this.state.selectedCategory
                ?.filter((item) => {
                  return item.name
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase());
                })
                .map((bike) => {
                  return (
                    <Card className="shop__card--indv" key={bike._id}>
                      <Card.Body>
                        <Card.Link
                          className="shop__card--top"
                          href={`/product/${bike._id}`}
                        >
                          <Card.Img variant="top" src={bike.image} />
                        </Card.Link>
                      </Card.Body>
                      <Card.Footer>
                        <Card.Title>{bike.name}</Card.Title>

                        <small className="text-muted">
                          <Card.Text>{bike.price}</Card.Text>
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
