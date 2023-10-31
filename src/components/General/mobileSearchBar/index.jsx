import React from 'react'
import { observer } from 'mobx-react-lite';

import mobileSearchbar from '../../../store/mobileSearchbar';
import noScroll from '../../../store/noScroll';

import './index.scss';





const MobileSearchBar = observer(() => {

  function close() {
    mobileSearchbar.toggleShow()
    noScroll.toggleScroll()
  }

  return (
    <div className={`mobile_searchbar ${!mobileSearchbar.show ? 'mobile_searchbar-hidden' : ''}`}>
      <div className="container">
        <div className="mobile_searchbar__wrapper">
          <form action="." className="mobile_searchbar__form"></form>
              <input type="text" className="mobile_searchbar__input"/>
          <button 
            className="mobile__btn"
            onClick={close}
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
    
  )
})

export default MobileSearchBar;
