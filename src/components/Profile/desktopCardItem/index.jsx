import React from 'react';

import trashIcon from './../../../assets/images/profile/trash.svg';
import checkIcon from './../../../assets/images/bankIcons/circle_check.svg';

import { hiddenNumberCard } from '../../../services/services';
import { deleteBankCard, updateStatusBankCard } from '../../../api/profileAPI';
import { showError } from '../../../hooks/showError';

import './index.scss';





const DesktopCardItem = ({ card, cards, setCards, mainCard, setMainCard }) => {

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
          console.error(error)
        })
    }


    return (
      <div className={Number(mainCard) === Number(card.id) ? 'bank_cards__item bank_cards__item-selected' : 'bank_cards__item'}
        onClick={(changeMain)}
      >
          <div className="bank_cards__header">
              <p className="bank_cards__header_text">{Number(mainCard) === Number(card.id) ? 'Основная карта' : 'Сделать основной'}</p>
              {Number(mainCard) === Number(card.id) && <img src={checkIcon} className="bank_cards__icon" /> }
          </div>
          <img src={trashIcon} className="trash" onClick={deleteCard} />
          <div className="bank_cards__footer">
              <div className="date_wrapper">
                <p className="bank_cards__card_number">{hiddenNumberCard(card.card_number)}</p>
                <p className="bank_cards__date">{card.month + '/' + card.year}</p>
              </div>
              <img src={card.bank_ico} className="bank_cards__bank_ico" />
          </div>
      </div>
    )
}

export default DesktopCardItem;
