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
            <Title title={'Добавить в корзину'} additionalClass='sendToCartTitle' />

            <CloseBtn handler={closeSendToCart} />

            <div className="sendToCartWrapper">
                <Sizes relateInputs={relateInputs} />
                <Colors relateInputs={relateInputs} />
            </div>
            

            <Button text="В корзину" additionalClass='sendToCartBtn' />
        </div>
  )
})

export default SendToCart;
