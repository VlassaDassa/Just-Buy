import React from 'react';

import './index.scss';





const Colors = ({ relateInputs }) => {

  return (
    <div className="sendToCart-ColorsWrapper">
        {
          relateInputs.map((item) => (
            <div key={item.color} id={item.color} className="sendToCart-ColorsItem"></div>
          ))
        }
    </div>
  )
}

export default Colors;
