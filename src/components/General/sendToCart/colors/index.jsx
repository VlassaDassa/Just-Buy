import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

import sendToCart from '../../../../store/sendToCart';

import './index.scss';



const Colors = observer(() => {

  console.log(toJS(sendToCart.relateInputs))

  return (
    <div className="sendToCart-ColorsWrapper">
        {toJS(sendToCart.relateInputs).length > 0 ?
          toJS(sendToCart.relateInputs).map((item, index) => {
            <div 
              id={item.color}
              key={item.color + index} 
              className="sendToCart-ColorsItem"
            >
            </div>
          })

          : null 
        }

    </div>
  )
})

export default Colors;
