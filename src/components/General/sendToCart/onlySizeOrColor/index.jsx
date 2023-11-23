import React, { useEffect, useState } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite'; 

import sendToCart from '../../../../store/sendToCart';
import { getSizes } from '../../../../api/cartAPI';
import { showError } from '../../../../hooks/showError';

import './index.scss';





const OnlySizeOrColor = observer(({ selectedSize, setSelectedSize, selectedColor, setSelectedColor }) => {
    const [sizes, setSizes] = useState([])

    // For getting sizes display names
    useEffect(() => {
        if (toJS(sendToCart.sizes) && toJS(sendToCart.sizes).length > 0) {
            const fetchData = async () => {
              try {
                const sizesResponse = await getSizes(
                    toJS(sendToCart.sizes).map((item) => item.selectSize)
                );
        
                if (sizesResponse.status !== 200) {
                  showError('Ошибка при добавлении товара');
                  throw new Error('Ошибка при добавлении товара');
                }
    
                const sizesData = await sizesResponse.data;
                setSizes(sizesData)
    
              } catch (error) {
                showError('Ошибка при добавлении товара');
                console.error(error);
              }
            };
    
            fetchData();
        }
      }, [sendToCart.sizes]);



    return (
            <>
                {
                    toJS(sendToCart.colors).length > 0 ?
                        <div className="sendToCart-ColorsWrapper">
                            {
                                toJS(sendToCart.colors).map((item) => (
                                    <div 
                                        id={item.selectColor}
                                        key={item.selectColor}
                                        className={item.selectColor === selectedColor ? "sendToCart-ColorsItem sendToCart-ColorsItem--selected" : 'sendToCart-ColorsItem'}
                                        onClick={() => item.selectColor === selectedColor ? setSelectedColor(null) : setSelectedColor(item.selectColor)}
                                    >
                                    </div>
                                ))
                            }
                        </div>

                    :
                        <div className="sendToCart-SizesWrapper">
                            {sizes && sizes.length > 0 ?
                                sizes.map((item, index) => (
                                    <div 
                                        className={item.value === selectedSize ? "sendToCart-SizesItem sendToCart-SizesItem--selected" : 'sendToCart-SizesItem'}
                                        key={item.display_name + index}
                                        onClick={() => item.value === selectedSize ? setSelectedSize(null) : setSelectedSize(item.value)}
                                    >
                                        {item.display_name}
                                    </div>
                                ))
                            :
                                null
                            }

                        </div>
                }
            </>

    )
});

export default OnlySizeOrColor;
