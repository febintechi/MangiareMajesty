import React from 'react';
import {CAKEITEMS} from '../../data/cakeData/cakeData';
import CakeItems from './cakeChild';
import "./cake.css";


const cakeParent = () => {
  return (
    <div className='container lunch-body'>
    <div className='row card-box'>
     {CAKEITEMS.map((cakeItems)=>(
        <CakeItems  data ={cakeItems} />
     ))}
    </div>
</div>
  )
}

export default cakeParent;


