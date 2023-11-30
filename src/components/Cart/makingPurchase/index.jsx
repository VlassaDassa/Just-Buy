import React from 'react';

import CartInfoButton from '../cartInfoButton';

import './index.scss';



const MakingPurchase = ({ totalValues, existsDelPoint, existsBankCard }) => {
    const totalQuantity = Object.values(totalValues).reduce((totalCount, currentProduct) => totalCount + currentProduct.count, 0);
    const totalAmount = Object.values(totalValues).reduce((totalPrice, currentProduct) => totalPrice + currentProduct.price, 0);

    const formattedPrice = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    }).format(totalAmount);


    return (
            <div className="cartInfoItem">
                <CartInfoButton text={'Перейти к покупке'} disabled={existsBankCard && existsDelPoint && totalQuantity === 0} />

                <div className="purchaseRow countProducts">
                    <span className="purchaseRow-text">Товары, {totalQuantity} шт</span>
                    <span className="purchaseRow-text">{formattedPrice}</span>
                </div>

                <div className="purchaseRow price">
                    <span className="purchaseRow-text">Итого</span>
                    <span className="purchaseRow-text">{formattedPrice}</span>
                </div>
            </div>
    )
}

export default MakingPurchase;
