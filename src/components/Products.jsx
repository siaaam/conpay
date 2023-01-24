import React, { useEffect } from 'react';
import { products } from '../utils/ProductList';

const Products = () => {
  return (
    <div className="product container">
      <div className="grid_container">
        {products.map((product) => {
          const { id, img, heading, text } = product;
          return (
            <div key={id} className="card">
              <div className="card_img">
                <img src={img} alt="" />
              </div>
              <h2>{heading}</h2>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
