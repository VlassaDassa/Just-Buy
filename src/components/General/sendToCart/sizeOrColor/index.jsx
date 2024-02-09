import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

import sendToCart from '../../../../store/sendToCart';
import Button from './../../button';
import OnlySizeOrColor from '../onlySizeOrColor';

import { showError } from '../../../../hooks/showError';
import { addCartProduct } from '../../../../api/cartAPI';
import overlay from '../../../../store/overlay';
import noScroll from '../../../../store/noScroll';
import { updateTokens } from '../../../../services/services';

import './../index.scss';




const SizeOrColor = observer(({ inCart, setInCart }) => {
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)


    // Clear old values
    useEffect(() => {
        setSelectedSize(null)
        setSelectedColor(null)
    }, [sendToCart.show])
    
    
    // Send to cart sizes or colors with his count
    const sendData = () => {
        const data = {
            'product_id': toJS(sendToCart.productId),
            'user_id': localStorage.getItem('user_id')
        }

        if (selectedColor) {
            data['color'] = toJS(sendToCart.colors).find((item) => item.selectColor === selectedColor)
            data['count'] = data['color']['countColor']
        }
        
        else if (selectedSize) {
            data['size'] = toJS(sendToCart.sizes).find((item) => item.selectSize === selectedSize)
            data['count'] = data['size']['countSize']
        }

        addCartProduct(data)
            .then(response => {
                if (response.status !== 200) {
                    showError('Ошибка при добавлении товара')
                    return
                }

                setInCart([...inCart, toJS(sendToCart.productId)])

                noScroll.toggleScroll(true)
                overlay.toggleShow(false)

                sendToCart.toggleShow(false)
                sendToCart.setProductId(null)

                sendToCart.setRelateInputs([])
                sendToCart.setColors([])
                sendToCart.setSizes([])
            })
            .catch(error => {
                // Обновление refresh Token при истечении годности AccessToken
                if (error?.response?.status == 401) updateTokens()

                console.error(error)
                showError('Ошибка при добавлении товара')
            })
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
