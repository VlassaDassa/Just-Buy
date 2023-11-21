import React, { useEffect } from 'react';

import './index.scss';





const SendToColors = ({ relateInputs, selectedColor, setSelectedColor }) => {


  return (
    <div className="sendToCart-ColorsWrapper">
        <div 
          key={item.color + index} 
          id={item.color} 
          className={item.color === selectedColor ? 'sendToCart-ColorsItem sendToCart-ColorsItem--selected': 'sendToCart-ColorsItem'}
          onClick={() => setSelectedColor(item.color)}
        >
        </div>
    </div>
  )
}

export default SendToColors;
