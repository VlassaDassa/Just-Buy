import React, { useState, useEffect } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite'; 

import Sizes from './../sizes';
import Colors from './../colors';
import Button from './../../button';

import sendToCart from './../../../../store/sendToCart';

import './../index.scss';




const RelateFields = observer(() => {
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)

    const [sizes, setSizes] = useState()
    const [colors, setColors] = useState()


    useEffect(() => {
        setSizes(toJS(sendToCart.relateInputs).map((item) => item.size))
        setColors(toJS(sendToCart.relateInputs).map((item) => item.color))

    }, [sendToCart.relateInputs, selectedSize, selectedColor])


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
        console.log(`Add to cart product - ${sendToCart.productId}. Fielsd: ${selectedColor} and ${selectedSize}`)
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
