import React, { useEffect, useState } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite'; 

import Sizes from './sizes';
import Colors from './colors';
import Button from '../button';
import CloseBtn from '../closeBtn';
import Title from '../title';

import noScroll from '../../../store/noScroll';
import sendToCart from '../../../store/sendToCart';
import overlay from '../../../store/overlay';

import './index.scss';





const SendToCart = observer(() => {
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)

  const [sizes, setSizes] = useState()
  const [colors, setColors] = useState()



  useEffect(() => {
      setSizes(toJS(sendToCart.relateInputs).map((item) => item.size))
      setColors(toJS(sendToCart.relateInputs).map((item) => item.color))

  }, [sendToCart.relateInputs, selectedSize, selectedColor])


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



  const closeSendToCart = () => {
      noScroll.toggleScroll(true)
      sendToCart.toggleShow(false)
      sendToCart.setProductId(null)
      overlay.toggleShow(false)
      sendToCart.setRelateInputs([])
  }

  const openCondition = sendToCart.relateInputs.length > 0 && sendToCart.productId && sendToCart.show
                          
  return (
        <div className={openCondition ? 'sendToCart sendToCart--show' : 'sendToCart'}>
          <Title title={'Добавить в корзину'} additionalClass='sendToCartTitle' />

          <CloseBtn handler={closeSendToCart} />

          <div className="sendToCartWrapper">

              <Sizes sizes={sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
              <Colors colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />

          </div>


          <Button text="В корзину" additionalClass='sendToCartBtn' />
        </div>
  )
})

export default SendToCart;
