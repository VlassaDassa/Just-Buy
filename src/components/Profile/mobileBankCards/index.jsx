import React from 'react';

import MobileCardItem from '../mobileCardItem';
import Loader from '../../loader';

import overlay from '../../../store/overlay';
import linkBankCard from '../../../store/linkBankCard';

import './index.scss';


const MobileBankCards = ({ cards, setCards, newCardLoading, mainCard, setMainCard }) => {

    const openLinkBankCard = () => {
      overlay.toggleShow(true)
      linkBankCard.toggleShow(true)
    }
  
    return (
      <div className="mobile_bank_cards__wrapper">

        {cards.map((card) => (
            <MobileCardItem card={card} setCards={setCards} cards={cards} key={card.id} mainCard={mainCard} setMainCard={setMainCard} />
        ))}

        {
          newCardLoading &&
            <div className="mobile_bank_cards__item--loader">
              <Loader additionalClass='mobile_card_loader' />
            </div>
        }

        <div className="mobile_bank_cards__item">
          <div className="circleProfile circle-mobile circle--link_card--mobile" onClick={openLinkBankCard}>
            <div className="cross cross--mobile"></div>
          </div>
        </div>
      </div>

      
    )
}

export default MobileBankCards;
