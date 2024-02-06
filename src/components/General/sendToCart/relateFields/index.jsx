import React, { useState, useEffect } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite'; 

import Sizes from './../sizes';
import Colors from './../colors';
import Button from './../../button';
import { showError } from '../../../../hooks/showError';
import overlay from '../../../../store/overlay';
import noScroll from '../../../../store/noScroll';
import { updateTokens } from '../../../../services/services';

import { addCartProduct } from '../../../../api/cartAPI';
import sendToCart from './../../../../store/sendToCart';

import './../index.scss';




const RelateFields = observer(({ inCart, setInCart }) => {
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)

    const [sizes, setSizes] = useState()
    const [colors, setColors] = useState()


    useEffect(() => {
        setSizes(toJS(sendToCart.relateInputs).map((item) => item.size))
        setColors(toJS(sendToCart.relateInputs).map((item) => item.color))

    }, [sendToCart.relateInputs, selectedSize, selectedColor])

    
    // Clear old values
    useEffect(() => {
            setSelectedSize(null)
            setSelectedColor(null)
    }, [sendToCart.relateInputs])


    useEffect(() => {
        if (selectedSize && !selectedColor) {
            setSizes(toJS(sendToCart.relateInputs).map((item) => item.size))
            setColors(toJS(sendToCart.relateInputs).filter(obj => obj.size === selectedSize)?.map((item) => item.color))
        }

        else if (selectedColor && !selectedSize) {
            setColors(toJS(sendToCart.relateInputs).map((item) => item.color))
            setSizes(toJS(sendToCart.relateInputs).filter(obj => obj.color === selectedColor)?.map((item) => item.size))
        }

    }, [selectedSize, selectedColor])


    // Send data to server
    const addToCart = () => {
        const data = {
            'product_id': toJS(sendToCart.productId),
            'user_id': localStorage.getItem('user_id'),
            'relateInputs': {
                'color': selectedColor,
                'size': selectedSize,
            },
            'count': toJS(sendToCart.relateInputs).find((item) => item.color === selectedColor && item.size === selectedSize).count,
        }

        addCartProduct(data) 
            .then(response => {
                if (response.status !== 200) {
                    showError('Ошибка при добавлении товара')
                    return
                }

                else {
                    setInCart([...inCart, toJS(sendToCart.productId)])

                    noScroll.toggleScroll(true)
                    overlay.toggleShow(false)

                    sendToCart.toggleShow(false)
                    sendToCart.setProductId(null)

                    sendToCart.setRelateInputs([])
                    sendToCart.setColors([])
                    sendToCart.setSizes([])
                }
            })
            .catch(error => {
                // Обновление refresh Token при истечении годности AccessToken
                if (error.response.status == 401) updateTokens()

                showError('Ошибка при добавлении товара')
                console.error(error)
            })
        
    }


    return (
            <>
                <div className="sendToCartWrapper">
                    <Sizes sizes={sizes} selectedSize={selectedSize} selectedColor={selectedColor} setSelectedSize={setSelectedSize} />
                    <Colors colors={colors} selectedSize={selectedSize} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
                </div>
                    <Button text="В корзину" additionalClass='sendToCartBtn' disabled={!(selectedColor && selectedSize)} handler={addToCart} />
            </>
    )
})

export default RelateFields
