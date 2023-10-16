import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  // console.log("aaa", PRODUCTS)
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>„TechWave” <br></br>Sklep internetowy z elektroniką</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
