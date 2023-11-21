import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

import sendToCart from '../../../../store/sendToCart';

import './index.scss';



const Colors = observer(({ relateInputs, selectedColor, setSelectedColor }) => {


  return (
    <div className="sendToCart-ColorsWrapper">
        {relateInputs.length > 0 ?
          [...new Set(relateInputs.map((item) => item.color))].map((item, index) => (
            <div 
              id={item}
              key={item} 
              className={selectedColor === item ? 'sendToCart-ColorsItem sendToCart-ColorsItem--selected' : 'sendToCart-ColorsItem'}
              onClick={() => selectedColor === item ? setSelectedColor(null) : setSelectedColor(item)}
            >
            </div>
          ))

          : null 
        }

    </div>
  )
})

export default Colors;
