import React from 'react';
import { useFilter } from '../filterContext/filterContext';

const FilterOption = () => {
  const { applySort } = useFilter();

  const handleSort = (sortType) => {
    applySort(sortType);
  };

  return (
    <div className="dropdown">
      <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Sort by
      </button>
      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item" onClick={() => handleSort('lowToHigh')}>
            Cost: Low to High
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => handleSort('highToLow')}>
            Cost: High to Low
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FilterOption;
