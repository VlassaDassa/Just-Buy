import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite'; 
import { CSSTransition } from 'react-transition-group';

import RelateFields from './relateFields';
import SizeOrColor from './sizeOrColor';
import CloseBtn from '../closeBtn';
import Title from '../title';

import noScroll from '../../../store/noScroll';
import sendToCart from '../../../store/sendToCart';
import overlay from '../../../store/overlay';

import './index.scss';





const SendToCart = observer(({ inCart, setInCart }) => {

  const closeSendToCart = () => {
      noScroll.toggleScroll(true)
      overlay.toggleShow(false)

      sendToCart.toggleShow(false)
      sendToCart.setProductId(null)

      sendToCart.setRelateInputs([])
      sendToCart.setColors([])
      sendToCart.setSizes([])
  }


  const openCondition = (sendToCart.productId ?? false) && sendToCart.show &&
    (sendToCart.relateInputs.length > 0 || sendToCart.sizes.length > 0 || sendToCart.colors.length > 0);
    
  console.log(openCondition)

  return (
        <CSSTransition
            key={'sendToCartTransition'}
            timeout={250}
            classNames="sendToCartTransition"
            in={openCondition}
            unmountOnExit
        >
            <div className='sendToCart'>
                <Title title={'Добавить в корзину'} additionalClass='sendToCartTitle' />

                <CloseBtn handler={closeSendToCart} />

                {
                    toJS(sendToCart.relateInputs).length > 0 ?
                        <RelateFields inCart={inCart} setInCart={setInCart} />
                    :
                        <SizeOrColor inCart={inCart} setInCart={setInCart} />
                }
                

            </div>
        </CSSTransition>
  )
})

export default SendToCart;
