import React, { useContext ,createContext ,useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [selectedFilterdOption,setSelectedSortOption] = useState('')
}