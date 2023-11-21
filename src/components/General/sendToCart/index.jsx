import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import SendToSizes from './sizes';
import SendToColors from './colors';
import Button from '../button';
import CloseBtn from '../closeBtn';
import Title from '../title';

import noScroll from '../../../store/noScroll';
import sendToCart from '../../../store/sendToCart';
import overlay from '../../../store/overlay';

import './index.scss';





const SendToCart = observer(({ relateInputs }) => {
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)

  const closeSendToCart = () => {
    noScroll.toggleScroll(true)
    sendToCart.toggleShow(false)
    sendToCart.setProductId(null)
    overlay.toggleShow(false)
  }

  return (
        <div className="sendToCart">
            {
              relateInputs.length > 0 ? 
                <>
                  <Title title={'Добавить в корзину'} additionalClass='sendToCartTitle' />

                  <CloseBtn handler={closeSendToCart} />

                  <div className="sendToCartWrapper">

                      <SendToSizes relateInputs={relateInputs} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
                      <SendToColors relateInputs={relateInputs} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                  </div>


                  <Button text="В корзину" additionalClass='sendToCartBtn' />
                </>
              :
                null
            }

            
        </div>
  )
})

export default SendToCart;
