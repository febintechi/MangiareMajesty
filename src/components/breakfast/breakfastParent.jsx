import React from 'react';
import { useFilter } from '../filterContext/filterContext';
import { BREAKFASTITEMS } from '../../data/breakfastData/breakfastData';
import BreakFastItems from './breakfastChild';

const BreakfastListed = () => {
  const { sortBy } = useFilter(); // Accessing sorting context

  // Function to sort breakfast items based on selected option
  const sortBreakfastItems = (items, sortingOption) => {
    switch (sortingOption) {
      case 'lowToHigh':
        return items.slice().sort((a, b) => a.price - b.price);
      case 'highToLow':
        return items.slice().sort((a, b) => b.price - a.price);
      default:
        return items; // If default, return original items
    }
  };

  const sortedBreakfastItems = sortBreakfastItems(BREAKFASTITEMS, sortBy);

  return (
    <div className="container breakfast-body">
      <div className='row card-box'>
        {sortedBreakfastItems.map((items) => (
          <BreakFastItems key={items.id} data={items} />
        ))}
      </div>
    </div>
  );
};

export default BreakfastListed;
