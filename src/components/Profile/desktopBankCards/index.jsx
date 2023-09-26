import React from 'react';

import Loader from '../../loader';
import DesktopCardItem from '../desktopCardItem';

import overlay from '../../../store/overlay';
import linkBankCard from '../../../store/linkBankCard';

import './index.scss';





const DesktopBankCards = ({ cards, setCards, newCardLoading, mainCard, setMainCard }) => {

  const openLinkBankCard = () => {
    overlay.toggleShow(true)
    linkBankCard.toggleShow(true)
  }

  return (
    <div className="bank_cards__wrapper">
        {cards.map((card) => (
            <DesktopCardItem card={card} setCards={setCards} cards={cards} key={card.id} mainCard={mainCard} setMainCard={setMainCard} />
        ))}

        {
          newCardLoading &&
            <div className="bank_cards__circle_wrapper bank_cards__circle_wrapper--loader">
              <Loader additionalClass='card_loader' />
            </div>
        }
        
        <div className="bank_cards__circle_wrapper">
          <div className="circleProfile circle--link_card--desktop" onClick={openLinkBankCard}>
            <div className="cross"></div>
          </div> 
        </div>
    </div>
  )
}

export default DesktopBankCards;
