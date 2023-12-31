
import React from "react";
import { BREAKFASTITEMS } from "../../data/breakfastData/breakfastData";
import BreakFastItems from "./breakfastChild";

const BreakfastListed = () => {
  return (
    <div className="container breakfast-body">
      <div className='row card-box'>
        {BREAKFASTITEMS.map((items) => (
          <BreakFastItems key={items.id} data={items} />
        ))}
        
      </div>
    </div>
  );
};

export default BreakfastListed;
