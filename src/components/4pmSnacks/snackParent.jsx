import React from 'react';
import { useFilter } from '../filterContext/filterContext';
import { SNACKITEMS } from '../../data/snackData/snackData';
import Snackitems from "./snackChild";


const SnackParent = () => {
  const { sortBy } = useFilter(); // Accessing sorting context

  // Function to sort breakfast items based on selected option
  const sortSnackItems = (items, sortingOption) => {
    switch (sortingOption) {
      case 'lowToHigh':
        return items.slice().sort((a, b) => a.price - b.price);
      case 'highToLow':
        return items.slice().sort((a, b) => b.price - a.price);
      default:
        return items; // If default, return original items
    }
  };
 
  const sortedSnackItems = sortSnackItems(SNACKITEMS, sortBy);

  return (
    <div className="container breakfast-body">
      <div className='row card-box'>
        {sortedSnackItems.map((snacks)=>(
          <Snackitems key={snacks.id} data={snacks} />
        ))}
        
      </div>
    </div>
  )
}

export default SnackParent
