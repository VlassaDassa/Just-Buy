import React from 'react';

import CartInfoTitle from '../cartInfoTitle';
import CartInfoButton from '../cartInfoButton';
import CartInfoText from '../cartInfoText';

import bankIco from './../../../assets/images/cart/bankIco.svg';

import './index.scss';





const PaymentMethod = () => {



    return (
            <div className="cartInfoItem">
                <CartInfoTitle text={'Способ оплаты'} />
                
                <div className="paymentMethod-textWrapper">
                    <img src={bankIco} className="paymentMethod-bankIco" />
                    <CartInfoText text={'455*****9136'} />
                </div>

                <CartInfoButton text={'Изменить'} />
            </div>
    )
}

export default PaymentMethod;
