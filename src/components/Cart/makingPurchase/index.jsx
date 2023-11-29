import React from 'react';

import CartInfoButton from '../cartInfoButton';

import './index.scss';



const MakingPurchase = ({ selectedProducts }) => {



    return (
            <div className="cartInfoItem">
                <CartInfoButton text={'Перейти к покупке'} />

                <div className="purchaseRow countProducts">
                    <span className="purchaseRow-text">Товары, {selectedProducts.length} шт</span>
                    <span className="purchaseRow-text">1554 ₽</span>
                </div>

                <div className="purchaseRow price">
                    <span className="purchaseRow-text">Итого</span>
                    <span className="purchaseRow-text">1554 ₽</span>
                </div>
            </div>
    )
}

export default MakingPurchase;
