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

  const [relateInputs, setRelateInputs] = useState([])


  useEffect(() => {
      setRelateInputs(toJS(sendToCart.relateInputs))
  }, [sendToCart.relateInputs, selectedSize, selectedColor])


  useEffect(() => {
      if (selectedSize && !selectedColor) {
          setRelateInputs(toJS(sendToCart.relateInputs).filter(obj => obj.size === selectedSize))
      }

      else if (selectedColor && !selectedSize) {
        setRelateInputs(toJS(sendToCart.relateInputs).filter(obj => obj.color === selectedColor))
      }
  }, [selectedSize, selectedColor])

  console.log('Relate inputs: ', relateInputs)


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

              <Sizes relateInputs={relateInputs} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
              <Colors relateInputs={relateInputs} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />

          </div>


          <Button text="В корзину" additionalClass='sendToCartBtn' />
        </div>
  )
})

export default SendToCart;
