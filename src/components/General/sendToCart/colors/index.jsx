import React from 'react';
import { observer } from 'mobx-react-lite';

import './index.scss';



const Colors = observer(({ colors, selectedSize, selectedColor, setSelectedColor }) => {

  const choiceColor = (item) => {
      if (selectedSize && selectedColor && selectedColor !== item) return;

      if (selectedColor === item) {
          setSelectedColor(null)
      }

      else {
        setSelectedColor(item)
      }
  }


  return (
    <div className="sendToCart-ColorsWrapper">
        {colors && colors.length > 0 ?
          [...new Set(colors)].map((item, index) => (
            <div 
              id={item}
              key={item} 
              className={selectedColor === item ? 'sendToCart-ColorsItem sendToCart-ColorsItem--selected' : 'sendToCart-ColorsItem'}
              onClick={() => choiceColor(item)}
            >
            </div>
          ))

          : null 
        }

    </div>
  )
})

export default Colors;
