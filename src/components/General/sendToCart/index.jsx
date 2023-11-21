import React from 'react';

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

              <Sizes />
              <Colors />

          </div>


          <Button text="В корзину" additionalClass='sendToCartBtn' />
        </div>
  )
})

export default SendToCart;
