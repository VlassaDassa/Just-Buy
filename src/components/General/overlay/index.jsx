import React from 'react'
import './index.scss';
import { observer } from 'mobx-react-lite';

import menu from '../../../store/menu';
import auth from '../../../store/auth';
import overlay from '../../../store/overlay';
import noScroll from '../../../store/noScroll';
import linkBankCard from '../../../store/linkBankCard';
import mobileMap from '../../../store/mobileMap';





const Overlay = observer(() => {

    function off_overlay() {
      menu.toggleShow(false)
      menu.toggleSubcategoryShow(false)
      auth.toggleShow(false)
      overlay.toggleShow()
      noScroll.toggleScroll(true)
      linkBankCard.toggleShow(false)
      mobileMap.toggleShow(false)
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
