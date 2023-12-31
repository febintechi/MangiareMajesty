import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const useFilter = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }) => {
  const [sortBy, setSortBy] = useState('default'); // 'default', 'lowToHigh', 'highToLow'

  const applySort = (sortOption) => {
    setSortBy(sortOption);
  };

  return (
    <FilterContext.Provider value={{ sortBy, applySort }}>
      {children}
    </FilterContext.Provider>
  );
  
};
