
import React from "react";
import { BREAKFASTITEMS } from "../../data/breakfastData/breakfastData";
import Product from "./breakfastChild";
import "./breakfast.css"; 

const BreakfastListed = () => {
  return (
    <div className="container breakfast-body">
      <div className='row card-box'>
        {BREAKFASTITEMS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
        
      </div>
    </div>
  );
};

export default BreakfastListed;
