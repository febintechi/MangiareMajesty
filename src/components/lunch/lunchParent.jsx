import React from 'react'
import { useFilter } from '../filterContext/filterContext';
import { LUNCHITEMS } from "../../data/lunchData/lunchData";
import Lunchitems from "./lunchChild";

const LunchParent = () => {
  const { sortBy } = useFilter(); // Accessing sorting context

  // Function to sort breakfast items based on selected option
  const sortLunchItems = (items, sortingOption) => {
    switch (sortingOption) {
      case 'lowToHigh':
        return items.slice().sort((a, b) => a.price - b.price);
      case 'highToLow':
        return items.slice().sort((a, b) => b.price - a.price);
      default:
        return items; // If default, return original items
    }
  };
 
  const sortedLunchItems = sortLunchItems(LUNCHITEMS, sortBy);

  return (
    <div className="container lunch-body">
    <div className='row card-box'>
      {sortedLunchItems.map((lunchitems) => (
        <Lunchitems key={lunchitems.id} data={lunchitems} />
      ))}
      
    </div>
  </div>
  )
}

export default LunchParent;

     
     
         
      
        



