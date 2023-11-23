import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite'; 

import RelateFields from './relateFields';
import SizeOrColor from './sizeOrColor';
import CloseBtn from '../closeBtn';
import Title from '../title';

import noScroll from '../../../store/noScroll';
import sendToCart from '../../../store/sendToCart';
import overlay from '../../../store/overlay';

import './index.scss';





const SendToCart = observer(() => {

  const closeSendToCart = () => {
      noScroll.toggleScroll(true)
      overlay.toggleShow(false)

      sendToCart.toggleShow(false)
      sendToCart.setProductId(null)

      sendToCart.setRelateInputs([])
      sendToCart.setColors([])
      sendToCart.setSizes([])
  }


  const openCondition = (sendToCart.productId && sendToCart.show) && 
                        (
                            sendToCart.relateInputs.length > 0 || 
                            sendToCart.sizes.length > 0 || 
                            sendToCart.colors.length > 0
                        )
                         
                        
  return (
        <div className={openCondition ? 'sendToCart sendToCart--show' : 'sendToCart'}>
            <Title title={'Добавить в корзину'} additionalClass='sendToCartTitle' />

            <CloseBtn handler={closeSendToCart} />

            {
                toJS(sendToCart.relateInputs).length > 0 ?
                    <RelateFields />
                :
                    <SizeOrColor />
            }
            

        </div>
  )
})

export default SendToCart;
