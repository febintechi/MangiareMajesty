import React from 'react'
import { DINNERITEMS } from "../../data/dinnerData/dinnerData";
import DinnerChild from "./dinnerChild";
import "./dinner.css";


const dinnerParent = () => {
  return (
    <div className='container lunch-body'>
        <div className='row card-box'>
          {DINNERITEMS.map((dinnerItems)=> (
            <DinnerChild data={dinnerItems} />
          ))}
        </div>
    </div>
  )
}

export default dinnerParent
