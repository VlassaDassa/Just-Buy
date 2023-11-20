import React from 'react';

import './index.scss';





const SendToColors = ({ relateInputs, selectedColor, setSelectedColor }) => {


  const bbb = (color) => {
    setSelectedColor(color)
  }

  return (
    <div className="sendToCart-ColorsWrapper">
        {
          relateInputs.map((item) => (
            <div 
              key={item.color} 
              id={item.color} 
              className={item.color === selectedColor ? 'sendToCart-ColorsItem sendToCart-ColorsItem--selected': 'sendToCart-ColorsItem'}
              onClick={() => bbb(item.color)}
            >

            </div>
          ))
        }
    </div>
  )
}

export default SendToColors;
