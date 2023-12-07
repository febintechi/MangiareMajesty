import React from 'react';
import { SNACKITEMS } from '../../data/snackData/snackData';
import Snackitems from "./snackChild";


const SnackParent = () => {
  return (
    <div className="container breakfast-body">
      <div className='row card-box'>
        {SNACKITEMS.map((snacks)=>(
          <Snackitems key={snacks.id} data={snacks} />
        ))}
        
      </div>
    </div>
  )
}

export default SnackParent
