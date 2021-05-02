import axios from "axios";
import React, { useState, useEffect } from "react";
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

function ItemList(props) {
  // const [currentUser, setcurrentuser] = useState()
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [search, setSearch] = useState("");
  const [drop, setDrop] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const { id } = props.match.params;

    // GET selectedCategory by id
    axios.get(`${baseUrl}/categories/${id}`).then((res) => {
      setSelectedCategory(res.data);
    });

    // GET list of categories
    axios.get(`${baseUrl}/categories`).then((res) => {
      setCategoryList(res.data);
      const selectedCat = res.data.filter((cat) => cat._id === id);
      const selectedCatName = selectedCat[0].name;
      setDrop(selectedCatName);
    });

    //Get product by id
    // axios call to backend to get currentUser info and set it to state
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
  }, [props.match.params]);
  console.log(selectedCategory);
  console.log(categoryList);
  return (
    <section>
      <div className="sub-nav">
        <Nav className="sub-nav__links" activeKey="/home">
          <DropdownButton
            id="dropdown-basic-button"
            variant="Secondary"
            title={drop}
          >
            {categoryList.map((cat) => {
              return (
                <Dropdown.Item key={cat._id} href={`/categories/${cat._id}`}>
                  {cat.name}
                </Dropdown.Item>
              );
            })}
            <Dropdown.Item href={`/categories`}>Categories</Dropdown.Item>
          </DropdownButton>
          <div className="sub-nav__form">
            <Form inline>
              <FormControl
                type="text"
                onChange={handleChange}
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

export default ItemList;
