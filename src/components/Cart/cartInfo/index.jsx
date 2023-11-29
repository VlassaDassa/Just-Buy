import React from 'react';

import MakingPurchase from '../makingPurchase';
import DeliveryPoint from '../deliveryPoint';
import PaymentMethod from '../paymentMethod';

import './index.scss';





const CartInfo = ({ selectedProducts }) => {

    return (
            <div className='cartInfo'>
                <div className='cartInfoStickyWrapper'>
                    <MakingPurchase selectedProducts={selectedProducts} />
                    <DeliveryPoint />
                    <PaymentMethod />
                </div>
            </div>
    )
}

export default CartInfo;
