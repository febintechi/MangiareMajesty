import React from 'react'
import { useFilter } from '../filterContext/filterContext';
import { DINNERITEMS } from "../../data/dinnerData/dinnerData";
import DinnerChild from "./dinnerChild";
import "./dinner.css";


const DinnerParent = () => {
  const { sortBy } = useFilter(); // Accessing sorting context

  // Function to sort breakfast items based on selected option
  const sortDinnerItems = (items, sortingOption) => {
    switch (sortingOption) {
      case 'lowToHigh':
        return items.slice().sort((a, b) => a.price - b.price);
      case 'highToLow':
        return items.slice().sort((a, b) => b.price - a.price);
      default:
        return items; // If default, return original items
    }
  };
 
  const sortedDinnerItems = sortDinnerItems(DINNERITEMS, sortBy);

  return (
    <div className='container lunch-body'>
      <div className='row card-box'>
      {sortedDinnerItems.map((dinnerItem) => (
        <DinnerChild key={dinnerItem.id} data={dinnerItem} />
      ))}

      </div>
    </div>
  )
}

export default DinnerParent
