import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

import sendToCart from '../../../../store/sendToCart';
import Button from './../../button';
import OnlySizeOrColor from '../onlySizeOrColor';

import './../index.scss';




const SizeOrColor = observer(() => {
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)
    
    
    // Send to cart sizes or colors with his count
    const sendData = () => {
        if (selectedColor) {
            console.log('Color: ',toJS(sendToCart.colors).find((item) => item.selectColor === selectedColor))
        }

        else if (selectedSize) {
            console.log('Size: ', toJS(sendToCart.sizes).find((item) => item.selectSize === selectedSize))
        }
    }


    return (
        <>
            <div className="sendToCartWrapper">
                <OnlySizeOrColor
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}

                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                />
            </div>

            <Button text="В корзину" additionalClass='sendToCartBtn' disabled={!(selectedSize || selectedColor)} handler={sendData} />
        </>
    )
})

export default SizeOrColor;
