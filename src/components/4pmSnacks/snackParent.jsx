import React from 'react';
import { SNACKITEMS } from '../../data/snackData/snackData';
import Snackitems from "./snackChild";


const snackParent = () => {

  return (
    <div className="container breakfast-body">
      <div className='row card-box'>
        {SNACKITEMS.map((snack)=>(
          <Snackitems data={snack} />
        ))}
        
      </div>
    </div>
  )
}

export default snackParent
