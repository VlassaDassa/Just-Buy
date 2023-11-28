import React, { useState, useEffect } from 'react';

import MakingPurchase from '../makingPurchase';
import DeliveryPoint from '../deliveryPoint';
import PaymentMethod from '../paymentMethod';

import './index.scss';





const CartInfo = () => {
    const [isSticky, setIsSticky] = useState(false);


    return (
            <div className='cartInfo'>
                <div className='cartInfoStickyWrapper'>
                    <MakingPurchase />
                    <DeliveryPoint />
                    <PaymentMethod />
                </div>
            </div>
    )
}

export default CartInfo;
