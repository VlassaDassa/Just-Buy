import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import SuccessMessage from "../../SuccessMessage";

import { showError } from "../../../hooks/showError";
import { getCurrentBankCard, getCurrentDeliveryPoint, sendPurchasedGoods } from "../../../api/fetchData";
import useRequest from "../../../hooks/useRequest";
import { hiddenNumberCard } from "../../../services/services";

import "./index.scss"





const CartInfo = ({ totalCount, totalPrice, products, setProducts }) => {
    const [isVisibleSuccess, setIsVisibleSuccess] = useState(false)
    
    const [currentCard, setCurrentCard] = useState({})
    const [currentPoint, setCurrentPoint] = useState({})

    const [dataCard, loadingCard, errorCard] = useRequest(getCurrentBankCard, [])
    const [dataPoint, loadingPoint, errorPoint] = useRequest(getCurrentDeliveryPoint, [])

    // Set current card and delivery point
    useEffect(() => {
        if (dataCard && !loadingCard && !errorCard) {
            setCurrentCard(dataCard[0])
        }

        if (dataPoint && !loadingPoint && !errorPoint) {
            setCurrentPoint(dataPoint[0])
        }
      
    }, [loadingCard, loadingPoint])


    // Condition for activate button
    const btnIsActivated = (currentCard && !loadingCard) && (currentPoint && !loadingPoint) &&
                            products.some(item => item.isChecked)


    // Handling click for "buy" button
    const handleSaveBtn = () => {
        const purchased_goods = products.filter(item => item.isChecked)

        // Make data for send to server
        const sendData = {
            'products': [],
            'bank_card_id': currentCard.id,
            'delivery_point_id': currentPoint.id,
        }
        purchased_goods.map((item) => {
            sendData['products'].push({
                'product_id': item.id,
                'total_price': item.count * item.price,
            })
        })
        
        // Send to server
        sendPurchasedGoods(sendData)
        .then(response => {
            if (response.status !== 200) {
                showError('Ошибка при покупке')
            }
            else {
                // Success sended to server
                const filteredProducts = products.filter((product) => {
                    return !purchased_goods.some((purchasedProduct) => purchasedProduct.id === product.id);
                });
                setProducts(filteredProducts)
                setIsVisibleSuccess(true)
                setTimeout(() => {
                    setIsVisibleSuccess(false);
                }, 5000);
            }
        })
        .catch(error => {
            showError('Ошибка при покупке')
        })
    }

    return (
        <section className="cart_info">
            <CSSTransition
                in={isVisibleSuccess}
                key={'transSuccessMessage'}
                timeout={4000}
                classNames="success"
            >
                <SuccessMessage message={'Покупка прошла успешно!'} setIsVisibleSuccess={setIsVisibleSuccess} />
            </CSSTransition>
            
            <div className="cart_info__item-wrapper cart_info_price">
                <h1 className="cart_info__title">
                    Цена всего
                </h1>

                <p className="cart_info_price__count_prod">
                    Количество товаров: <span className="cart_info_price__count">{totalCount} шт</span>
                </p>

                <p className="cart_info_price__total_price">
                    Итого: <span className="cart_info_price__price">{totalPrice} ₽</span>
                </p>

                <button
                    disabled={!btnIsActivated}
                    onClick={handleSaveBtn}
                    className={btnIsActivated ? 'cart_info__btn cart_info__btn-buy' : 'cart_info__btn cart_info__btn-buy btnNoActive'}
                >
                    Купить
                </button>
            </div> 

            <div className="cart_info__item-wrapper cart_info_bank_card">
                <h1 className="cart_info__title cart_info__title-bank">
                    Карта
                </h1>

                <p className="cart_info_bank_card__bank_card">
                    {!currentCard && !loadingCard ?
                        'Карта не выбрана'
                    :
                        hiddenNumberCard(currentCard.card_number)
                    }
                </p>

                <Link to="/profile" className="cart_info__btn cart_info__btn-edit_card">Изменить</Link>
            </div> 

            <div className="cart_info__item-wrapper cart_point">
                <h1 className="cart_info__title">
                    Пункт выдачи
                </h1>
                
                {
                    !currentPoint && !loadingPoint ?
                        <p className="no_point">
                            Пункт выдачи не выбран
                        </p>
                    :
                    <>
                        <p className="cart_point__city">
                            Город: <span className="boldCity">{currentPoint.city}</span>
                        </p>

                        <p className="cart_point__address">
                            Улица: <span className="boldAddress">{currentPoint.address}</span>
                        </p>
                    </>
                }
                
                <Link to="/profile" className="cart_info__btn cart_point__btn-edit">Изменить</Link>
            </div>
        </section>
    )
}

export default CartInfo;