import React, { useState, useEffect } from 'react';

import { getSizes } from '../../../../api/cartAPI';
import useRequest from '../../../../hooks/useRequest';

import './index.scss';



const SendToSizes = ({ relateInputs, selectedSize, setSelectedSize }) => {
  const relateInputsCopy = JSON.parse(JSON.stringify(relateInputs));

  const [sizes, setSizes] = useState([])
  const [data, error, loading] = useRequest(() => getSizes(relateInputs.map(item => item.size)), []);

  if (!setSelectedSize) {
    return null;
  }


  // Values for sizes
  useEffect(() => {
    if (data && !loading) {
      setSizes(data)
    }
  }, [data, loading])


  // Formatting size
  relateInputsCopy.forEach((item, index) => {
    var newSize = sizes.find(sizeItem => sizeItem.value === item.size)
    relateInputsCopy[index].size = newSize
  })


  return (
    <div className="sendToCart-SizesWrapper">
        {
          sizes.map((item, index) => (
            <div 
              key={item.value + index} 
              className={item.value === selectedSize ? 'sendToCart-SizesItem sendToCart-SizesItem--selected' : 'sendToCart-SizesItem'}
              onClick={() => setSelectedSize(item.value)}
            >
              {item.display_name}
            </div>
          ))
        }
    </div>
  )
}

export default SendToSizes;
