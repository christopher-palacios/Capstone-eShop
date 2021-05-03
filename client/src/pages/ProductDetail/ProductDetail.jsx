import axios from "axios";
import { Form, Button } from "react-bootstrap";
import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import "./ProductDetail.scss";

const baseUrl = "http://localhost:8080/api";

function OnSale(props) {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { setCart, token, user } = useContext(AppContext);
  const history = useHistory();

  //Get from session storage
  // const token = sessionStorage.getItem("token");
  // const user = sessionStorage.getItem("user");
  // const userId = sessionStorage.getItem("userId");

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (product) => {
    const price = product.price.slice(1, 9);
    const noCommaPrice = price.split(",").join("");
    axios
      .post(
        `${baseUrl}/cart`,
        {
          quantity,
          product,
          price: noCommaPrice,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setCart(res.data);
        swal("Success!", "Item has beeen added to cart");
        history.push("/cart");
      })
      .catch((err) => swal(err.message));
  };

  useEffect(() => {
    const { id } = props.match.params;
    axios.get(`${baseUrl}/product/${id}`).then((res) => {
      const selectedProduct = res.data;
      setSelectedProduct(selectedProduct);
    });
    axios.get();
  }, [props.match.params]);

  return (
    <>
      <div className="product">
        <img
          className="product__img"
          alt="product img"
          src={selectedProduct.image}
        ></img>
        <div className="product__details">
          <div className="product__details--top">
            <div className="product__details--info">
              <h1 className="product__details--title">
                {selectedProduct.name}
              </h1>
              <h3 className="product__details--category">
                {selectedProduct.category}
              </h3>
              <h4>Price: {selectedProduct.price}</h4>
            </div>
            <div className="product__details--action">
              <div className="product__details--qty">
                <Form>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>QTY</Form.Label>
                    <Form.Control onChange={handleChange} as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </div>
              <Button
                onClick={() => {
                  handleSubmit(selectedProduct);
                }}
                className="product__details--add"
                variant="outline-dark"
              >
                ADD TO CART
              </Button>
            </div>
          </div>
          <div className="product__details--footer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              aliquet porta tempor. Integer fermentum consequat finibus. Aenean
              scelerisque dapibus tincidunt. Fusce molestie risus ut metus
              viverra pharetra. Nam varius eros magna, eu laoreet orci posuere
              ac. Nullam sit amet hendrerit sapien. Phasellus mollis pulvinar
              urna nec pulvinar.
            </p>
          </div>
          {/* <div className="product__review">
              <div className="product__review--card">
                <div className="product__review--head">
                  <h3>user</h3>
                  <h3>timestamp</h3>
                </div>
                <h3>review text goes here</h3>
              </div>
            </div> */}
        </div>
      </div>
    </>
  );
}

export default OnSale;
