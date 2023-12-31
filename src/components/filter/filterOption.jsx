import React from 'react'

const FilterOption = () => {
  return (
    <div className="dropdown">
      
      <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Sort by
      </button>
      
      <ul className="dropdown-menu">
        <li><button className="dropdown-item" >Cost: Low to High</button></li>
        <li><button className="dropdown-item" >Cost: High to Low</button></li>
      </ul>

    </div>
  )
}

export default FilterOption