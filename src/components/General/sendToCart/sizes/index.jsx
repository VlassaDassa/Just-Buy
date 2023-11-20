import React, { useState, useEffect } from 'react';

import { getSizes } from '../../../../api/cartAPI';
import useRequest from '../../../../hooks/useRequest';

import './index.scss';



const SendToSizes = ({ relateInputs, selectedSize, setSelectedSize }) => {
  console.log(selectedSize)
  console.log(setSelectedSize)
  console.log(relateInputs)
  const relateInputsCopy = JSON.parse(JSON.stringify(relateInputs));

  const [sizes, setSizes] = useState([])
  const [data, error, loading] = useRequest(() => getSizes(relateInputs.map(item => item.size)), []);

  
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


  const bbb = (size) => {
    setSelectedSize(size)
  }

  return (
    <div className="sendToCart-SizesWrapper">
        {
          sizes.map((item) => (
            <div 
              key={item.value} 
              className={item.value === selectedSize ? 'sendToCart-SizesItem sendToCart-SizesItem--selected' : 'sendToCart-SizesItem'}
              onClick={() => bbb(item.value)}
            >
              {item.display_name}
            </div>
          ))
        }
    </div>
  )
}

export default SendToSizes;
