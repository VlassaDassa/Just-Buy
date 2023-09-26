import React from 'react'
import './index.scss';
import { observer } from 'mobx-react-lite';

import menu from '../../store/menu';
import auth from '../../store/auth';
import overlay from '../../store/overlay';
import noScroll from '../../store/noScroll';
import linkBankCard from '../../store/linkBankCard';





const Overlay = observer(() => {

    function off_overlay() {
      menu.toggleShow(false)
      menu.toggleSubcategoryShow(false)
      auth.toggleShow(false)
      overlay.toggleShow()
      noScroll.toggleScroll(true)
      linkBankCard.toggleShow(false)
    }

    return (
      <div 
          className={`overlay ${overlay.show ? '' : 'overlay--hidden'}`}
          onClick={off_overlay}
      >

      </div>
    )
})

export default Overlay
