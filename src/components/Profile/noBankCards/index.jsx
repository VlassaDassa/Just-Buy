import React from 'react';

import overlay from '../../../store/overlay';
import linkBankCard from '../../../store/linkBankCard';

import './index.scss';




const NoBankCards = () => {

  const openLinkBankCard = () => {
    overlay.toggleShow(true)
    linkBankCard.toggleShow(true)
  }
  
  
  return (
    <div className="no_bank_cards">
        <p className="no_bank_cards__text">Банковских карт нет</p> 
        
        <div className="circleProfile circle--link_card--desktop" onClick={openLinkBankCard}>
            <div className="cross"></div>
        </div>

        <div className="circleProfile circle-mobile circle--link_card--mobile" onClick={openLinkBankCard}>
            <div className="cross cross-mobile"></div>
        </div>
    </div>
  )
}

export default NoBankCards;
