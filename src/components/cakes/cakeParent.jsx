import React from 'react';
import { useFilter } from '../filterContext/filterContext';
import {CAKEITEMS} from '../../data/cakeData/cakeData';
import CakeItems from './cakeChild';


const CakeParent = () => {
  const { sortBy } = useFilter(); // Accessing sorting context

  // Function to sort breakfast items based on selected option
  const sortCakeItems = (items, sortingOption) => {
    switch (sortingOption) {
      case 'lowToHigh':
        return items.slice().sort((a, b) => a.price - b.price);
      case 'highToLow':
        return items.slice().sort((a, b) => b.price - a.price);
      default:
        return items; // If default, return original items
    }
  };
 
  const sortedCakeItems = sortCakeItems(CAKEITEMS, sortBy);


  return (
    <div className='container lunch-body'>
    <div className='row card-box'>
     {sortedCakeItems.map((cakeItems)=>(
        <CakeItems  key={cakeItems.id} data ={cakeItems} />
      ))}
    </div>
</div>
  )
}

export default CakeParent;


