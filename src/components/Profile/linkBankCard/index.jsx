import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import linkBankCard from '../../../store/linkBankCard';
import overlay from '../../../store/overlay';

import { addBankCard } from '../../../api/profileAPI';
import { showError } from '../../../hooks/showError';
import { updateTokens } from '../../../services/services';

import { addSpaceToNChARS, onlyNumbers, detectCardType, getFileObject } from '../../../services/services';

import './index.scss';

import questionIcon from './../../../assets/images/bankIcons/question.svg';





const LinkBankCard = observer(({ setScheduleRender, scheduleRender, setNewCardLoading }) => {
    const [isNumberCard, setIsNumberCard] = useState('')
    const [isMonthCard, setIsMonthCard] = useState('')
    const [isYearCard, setIsYearCard] = useState('')
    const [isCVVCard, setIsCVVCard] = useState('')
    const [isCardType, setIsCardType] = useState(questionIcon)
    const [hiddenBankIcon, setHiddenBankIcon] = useState(true)
    const [isDisabledBtn, setIsDisabledBtn] = useState(true)


    const handleCardNumber = (event) => {
        const cardNumber = onlyNumbers(event.target.value)
        setIsNumberCard(addSpaceToNChARS(cardNumber, 4))

        if (cardNumber.length > 0) {
            setHiddenBankIcon(false)
            setIsCardType(detectCardType(cardNumber))
        }

        else {
            setHiddenBankIcon(true)
        }
    }

    const handleCardMonth = (event) => {
        setIsMonthCard(onlyNumbers(event.target.value))
    }

    const handleCardYear = (event) => {
        setIsYearCard(onlyNumbers(event.target.value))
    }

    const handleCardCVV = (event) => {
        setIsCVVCard(onlyNumbers(event.target.value))
    }

    const controlSaveButton = () => {
        if (isNumberCard.replace(/\D/g, '').length === 16 && isMonthCard.length === 2 && isYearCard.length === 2 && isCVVCard.length === 3) {
            setIsDisabledBtn(false)
        }
        else {
            setIsDisabledBtn(true)
        }
    }


    const clearField = () => {
        setIsNumberCard('')
        setIsMonthCard('')
        setIsYearCard('')
        setIsCVVCard('')
        setIsCardType(questionIcon)
    }


    async function sendDataToServer() {
        setNewCardLoading(true)
        try {
          const file = await getFileObject(isCardType, isCardType.split('/')[isCardType.split('/').length - 1]);
      
          if (file) {
            const data = new FormData();
            data.append('card_number', Number(isNumberCard.replace(/\D/g, '')));
            data.append('month', Number(isMonthCard));
            data.append('year', Number(isYearCard));
            data.append('main_card', false);
            data.append('bank_ico', file);
      
            const response = await addBankCard(data, localStorage.getItem('user_id'));
            if (response.status === 200) {
              setScheduleRender(!scheduleRender);
            }
            else {
                showError('Ошибка при добавлении карты')
            }
          } else {
            showError('Ошибка при добавлении карты')
          }
        } catch (error) {
            // Обновление refresh Token при истечении годности AccessToken
            if (error?.response?.status == 401) updateTokens()

            console.error(error)
            showError('Ошибка при добавлении карты')
        }
        setNewCardLoading(false);
      }

    const handleSaveCard = () => {
        sendDataToServer()
        closeLinkBankCard()
        clearField()
    }

    useEffect(() => {
        controlSaveButton()
    }, [isNumberCard, isMonthCard, isYearCard, isCVVCard])


    const closeLinkBankCard = () => {
        linkBankCard.toggleShow(false)
        overlay.toggleShow(false)
    }


    return (
        <div className={linkBankCard.show ? "link_card" : "link_card link_card--hidden"}>
            <div className="close-icon icon close-icon--link_card" onClick={closeLinkBankCard} ></div>
            
            <div className="link_card__title">
                Привязать карту
            </div>

            <div className="card_container card_container--desktop">
                <div className="card_container__item card_container__item--main_info">
                    <div className="input_wrapper">
                        <label className="input_wrapper__label" htmlFor="number_card">Номер карты</label>
                        <input type="text" id="number_card_desktop" className="input_wrapper__input" maxLength="19" placeholder="4277 2555 5555 5555" 
                            value={isNumberCard}
                            onChange={handleCardNumber}
                        />
                        <img src={isCardType} className={hiddenBankIcon ? 'bank_ico bank_ico--hidden' : 'bank_ico'} />
                    </div>

                    <div className="input_wrapper--line">
                        <input type="text" className="input_wrapper__input input_wrapper--line__input" id="month_desktop" placeholder="ММ" maxLength="2" 
                            onChange={handleCardMonth}
                            value={isMonthCard}
                        />
                        <div className="slash">/</div>
                        <input type="text" className="input_wrapper__input input_wrapper--line__input" id="year_desktop" placeholder="ГГ" maxLength="2" 
                            onChange={handleCardYear}
                            value={isYearCard}
                        />
                    </div>
                </div>

                <div className="card_container__item card_container__item--cvv">
                    <div className="card_container__line"></div>

                    <div className="input_wrapper input_wrapper--line-cvv">
                        <label className="input_wrapper__label input_wrapper__label--cvv" htmlFor="cvv">CVV</label>
                        <input type="password" id="cvv_desktop" className="input_wrapper__input" maxLength="3" 
                           onChange={handleCardCVV}
                           value={isCVVCard} 
                        />
                    </div>
                </div>
            </div>

            <div className="card_container card_container--mobile">
                <div className="input_wrapper input_wrapper--high">
                    <label className="input_wrapper__label" htmlFor="number_card">Номер карты</label>
                    <input type="text" id="number_card_mobile" className="input_wrapper__input" maxLength="19" placeholder="4277 2555 5555 5555" 
                        value={isNumberCard}
                        onChange={handleCardNumber}
                    />
                    <img src={isCardType} className={hiddenBankIcon ? 'bank_ico bank_ico--hidden' : 'bank_ico'} />
                </div>

                <div className="input_wrapper--line--low">
                    <div className="input_wrapper--line">
                        <input type="text" className="input_wrapper__input input_wrapper--line__input" id="month_mobile" placeholder="ММ" maxLength="2" 
                            onChange={handleCardMonth}
                            value={isMonthCard}
                        />
                        <div className="slash">/</div>
                        <input type="text" className="input_wrapper__input input_wrapper--line__input" id="year_mobile" placeholder="ГГ" maxLength="2" 
                            onChange={handleCardYear}
                            value={isYearCard}
                        />
                    </div>

                    <input type="password" id="cvv_mobile" className="input_wrapper__input" maxLength="3" placeholder="CVV" 
                        onChange={handleCardCVV}
                        value={isCVVCard} 
                    />
                </div>
                
            </div>

            <button className="save_card--mobile" disabled={isDisabledBtn} onClick={handleSaveCard}>Сохранить</button>
            <button className={isDisabledBtn ? 'save_card--desktop' : 'save_card--desktop save_card--desktop--activate'} disabled={isDisabledBtn} onClick={handleSaveCard}>Сохранить</button>
        </div>
    )
})

export default LinkBankCard;
