import React from 'react';

import CartInfoTitle from '../cartInfoTitle';
import CartInfoButton from '../cartInfoButton';
import CartInfoText from '../cartInfoText';

import { hiddenNumberCard } from '../../../services/services';
import bankIco from './../../../assets/images/cart/bankIco.svg';

import './index.scss';





const PaymentMethod = ({ curBankCard }) => {



    return (
            <div className="cartInfoItem">
                <CartInfoTitle text={'Способ оплаты'} />
                
                <div className="paymentMethod-textWrapper">
                    {curBankCard.length > 0 ?
                        <>  
                            <img src={curBankCard[0].bank_ico} className="paymentMethod-bankIco" />
                            <CartInfoText text={hiddenNumberCard(curBankCard[0].card_number)} />
                        </>
                        
                    :
                        <>
                            <img src={bankIco} className="paymentMethod-bankIco" />
                            <CartInfoText text={'455*****9136'} />
                        </>
                    }
                    
                </div>

                <CartInfoButton text={'Изменить'} />
            </div>
    )
}

export default PaymentMethod;
