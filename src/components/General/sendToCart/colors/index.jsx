import React from 'react';

import './index.scss';





const Colors = () => {
  return (
    <div className="sendToCart-ColorsWrapper">
        <div id='yellow' className="sendToCart-ColorsItem sendToCart-ColorsItem--selected"></div>
        <div id='white' className="sendToCart-ColorsItem"></div>
        <div id='blue' className="sendToCart-ColorsItem"></div>
        <div id='red' className="sendToCart-ColorsItem"></div>
        <div id='cyan' className="sendToCart-ColorsItem"></div>
        <div id='pink' className="sendToCart-ColorsItem"></div>
    </div>
  )
}

export default Colors;
