import React from 'react'
import { LUNCHITEMS } from "../../data/lunchData/lunchData";
import Lunchitems from "./lunchChild";
import "./lunch.css"; 

const lunchParent = () => {
  return (
    <div className="container lunch-body">
    <div className='row card-box'>
      {LUNCHITEMS.map((lunchitems) => (
        <Lunchitems key={lunchitems.id} data={lunchitems} />
      ))}
      
    </div>
  </div>
  )
}

export default lunchParent;

     
     
         
      
        



