import React from 'react';

import { hiddenNumberCard } from '../../../services/services';

import { deleteBankCard, updateStatusBankCard } from '../../../api/fetchData';
import { showError } from '../../../hooks/showError';

import circleCheck from './../../../assets/images/bankIcons/circle_check.svg';

import './index.scss';




const MobileCardItem = ({ card, cards, setCards, mainCard, setMainCard }) => {

  function deleteCard(event) {
    event.stopPropagation()

    deleteBankCard(card.id)
    .then(response => {
      if (response.status !== 200) {
        showError('Ошибка при удалении карты')
      }
      else {
        setCards(cards.filter(item => item.id !== card.id))
      }
    })
    .catch(error => {
      showError('Ошибка при удалении карты')
    })
  }

  function changeMain(event) {
    event.stopPropagation()

    updateStatusBankCard(card.id, true)
    .then(response => {
      if (response.status !== 200) {
        showError('Ошибка при выборе карты')
      }
      else {
        setMainCard(card.id)
      }
    })
    .catch(error => {
      showError('Ошибка при выборе карты')
    })
  }


  
  return (
    <div className="mobile_trash_wrapper" onClick={changeMain}>
        <div className="mobile_bank_cards__item">
          <div className="mobile_bank_cards__base_data">
              <img src={card.bank_ico} className="mobile_bank_cards__bank_ico" />
              <p className="mobile_bank_cards__card_number">{hiddenNumberCard(card.card_number)}</p>
              <p className="mobile_bank_cards__date">24/24</p>
          </div>

          <div className="mobile_bank_cards__secondary_data">
              <p className="mobile_bank_cards__status_card">{card.id === mainCard ? 'Основная карта' : 'Сделать основной'}</p>
              {
                mainCard === card.id &&
                  <img src={circleCheck} className="mobile_bank_cards__status_ico" />
              }
          </div>
        </div>
        <div className="mobile_trash" onClick={deleteCard}>Удалить</div>
    </div>
  )
}

export default MobileCardItem;
