import axios from "axios";
import React, { useEffect, useState } from "react";
import "./OnSale.scss";

const baseUrl = "http://localhost:8080/api";

function OnSale(props) {
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {
    const { id } = props.match.params;
    axios.get(`${baseUrl}/product/${id}`).then((res) => {
      const selectedProduct = res.data;
      setSelectedProduct(selectedProduct);
    });
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
              <h1>{selectedProduct.name}</h1>
              <h2>{selectedProduct.category}</h2>
            </div>
            <div className="product__details--action">
              <h3>QTY</h3>
              <h3>ADD TO CART</h3>
            </div>
          </div>
          <div className="product__details--footer">
            <h3>Product description</h3>
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
