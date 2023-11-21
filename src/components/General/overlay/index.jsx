import React from 'react'
import './index.scss';
import { observer } from 'mobx-react-lite';

import menu from '../../../store/menu';
import auth from '../../../store/auth';
import overlay from '../../../store/overlay';
import noScroll from '../../../store/noScroll';
import linkBankCard from '../../../store/linkBankCard';
import mobileMap from '../../../store/mobileMap';
import relateSizeAndColor from '../../../store/relateSizeAndColor';
import sendToCart from '../../../store/sendToCart';





const Overlay = observer(() => {

    function off_overlay() {
      menu.toggleShow(false)
      menu.toggleSubcategoryShow(false)
      auth.toggleShow(false)
      overlay.toggleShow()
      noScroll.toggleScroll(true)
      linkBankCard.toggleShow(false)
      mobileMap.toggleShow(false)
      relateSizeAndColor.toggleShow(false)
      sendToCart.toggleShow(false)
      sendToCart.setProductId(null)
      sendToCart.setRelateInputs([])
    }

    return (
      <div 
          className="overlay"
          onClick={off_overlay}
      >

      </div>
    )
})

export default Overlay
