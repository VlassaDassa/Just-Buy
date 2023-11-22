import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite'; 

import { getSizes } from '../../../../api/cartAPI';
import { showError } from '../../../../hooks/showError';

import './index.scss';





const Sizes = observer(({ sizes, selectedSize, setSelectedSize }) => {
  const [isSizes, setIsSizes] = useState([])

  
  useEffect(() => {
    if (sizes && sizes.length > 0) {
        const fetchData = async () => {
          try {
            const sizesResponse = await getSizes(
              sizes
            );
    
            if (sizesResponse.status !== 200) {
              showError('Ошибка при добавлении товара');
              throw new Error('Ошибка при добавлении товара');
            }

            const sizesData = await sizesResponse.data;
            setIsSizes(sizesData)

          } catch (error) {
            showError('Ошибка при добавлении товара');
            console.error(error);
          }
        };

        fetchData();
    }
  }, [sizes]);



  return (
    <div className="sendToCart-SizesWrapper">
        {isSizes.length > 0 ?
          isSizes.map((item, index) => (
              <div
                className={item.value === selectedSize ? 'sendToCart-SizesItem sendToCart-SizesItem--selected' : 'sendToCart-SizesItem'}
                key={item.display_name + index}
                onClick={() => item.value === selectedSize ? setSelectedSize(null) : setSelectedSize(item.value)}
              >
                {item.display_name}
              </div>
            ))

          : null

        }
    </div>
  )
})


export default Sizes;
