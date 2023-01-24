import React from 'react';
import { products } from '../../utils/ProductList';

const Products = () => {
  return (
    <div className="mobile_products">
      <div className="productList">
        {products.map((product) => {
          const { id, img, heading, text } = product;
          return (
            <div key={id} className="productCard">
              <div className="productImg">
                <img src={img} alt="" />
              </div>
              <div className="productContent">
                <h3>{heading}</h3>
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
