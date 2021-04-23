import axios from "axios";
import React from "react";
import "./itemList.scss";
import {
  Nav,
  Card,
  CardDeck,
  Form,
  FormControl,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const baseUrl = "http://localhost:8080/api";

class Shop extends React.Component {
  state = {
    currentUser: null,
    selectedCategory: [],
    categoryList: [],
    search: "",
    drop: "",
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    // GET selectedCategory by id
    axios.get(`${baseUrl}/categories/${id}`).then((res) => {
      console.log(res);
      this.setState({ selectedCategory: res.data });
    });

    // GET list of categories
    axios.get(`${baseUrl}/categories`).then((res) => {
      this.setState({ categoryList: res.data });
      console.log(res.data);
      const selectedCat = res.data.filter((cat) => cat._id === id);
      const selectedCatName = selectedCat[0].name;
      this.setState({ drop: selectedCatName });
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
    const { drop, search, categoryList, selectedCategory } = this.state;
    console.log(drop);
    return (
      <section>
        <div className="sub-nav">
          <Nav className="sub-nav__links" activeKey="/home">
            {/* {this.state.categoryList?.map((link) => {
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
            </Nav.Item> */}
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
            <DropdownButton
              id="dropdown-basic-button"
              variant="Secondary"
              title={drop}
            >
              {categoryList.map((cat) => {
                return (
                  <Dropdown.Item href={`/categories/${cat._id}`}>
                    {cat.name}
                  </Dropdown.Item>
                );
              })}
              {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
          </Nav>
        </div>
        <div className="shop">
          <div className="shop__container">
            <CardDeck className="shop__card">
              {selectedCategory
                ?.filter((item) => {
                  return item.name.toLowerCase().includes(search.toLowerCase());
                })
                .map((bike) => {
                  return (
                    <Card className="shop__card--indv" key={bike._id}>
                      <Card.Body>
                        <Card.Link
                          className="shop__card--top"
                          href={`/product/${bike._id}`}
                        >
                          <Card.Img
                            className="shop__card--img"
                            variant="top"
                            src={bike.image}
                          />
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
