
import React from "react";
import { PRODUCTS } from "../../data/breakfastData/products";
import Product from "./breakfastChild";
import "./breakfast.css"; 

const BreakfastListed = () => {
  return (
    <div className="container breakfast-body">
      <div className='row card-box'>
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
        
      </div>
    </div>
  );
};

export default BreakfastListed;
