import axios from "axios";
import React, {
  useState,
  useEffect,
  useContext,
  //  useContext
} from "react";
// import { AppContext } from "../../AppContext/AppContext";
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
import { AppContext } from "../../AppContext/AppContext";

// const baseUrl = "https://e-shop-cp.herokuapp.com/api";

function ItemList(props) {
  // const guestCart = JSON.parse(localStorage.getItem("guestCart"));
  // const { productList } = useContext(AppContext);
  const { categoryList, baseUrl } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [drop, setDrop] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const { id } = props.match.params;

  const getSelected = () => {
    axios.get(`${baseUrl}/categories/${id}`).then((res) => {
      setSelectedCategory(res.data);
    });
  };

  useEffect(() => {
    getSelected();
    let current = categoryList.filter((cat) => {
      return cat._id === id;
    });
    setDrop(current[0]?.name);
  }, [categoryList, id]);
  return (
    <section className="itemList">
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
              .map((product) => {
                return (
                  <Card className="shop__card--indv" key={product._id}>
                    <Card.Body>
                      <Card.Link
                        className="shop__card--top"
                        href={`/product/${product._id}`}
                      >
                        <Card.Img
                          className="shop__card--img"
                          variant="top"
                          src={product.image}
                        />
                      </Card.Link>
                    </Card.Body>
                    <Card.Footer className="shop__card--footer">
                      <Card.Title>{product.name}</Card.Title>

                      <small className="text-muted">
                        <Card.Text>{product.price}</Card.Text>
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
