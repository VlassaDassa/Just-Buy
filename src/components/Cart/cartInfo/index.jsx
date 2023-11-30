import React, { useEffect, useState } from 'react';

import MakingPurchase from '../makingPurchase';
import DeliveryPoint from '../deliveryPoint';
import PaymentMethod from '../paymentMethod';

import useRequest from '../../../hooks/useRequest';
import { getCurrentBankCard } from '../../../api/profileAPI';
import { getCurrentDeliveryPoint } from '../../../api/deliveryPointAPI';

import './index.scss';





const CartInfo = ({ totalValues }) => {
    const [dataDeliveryPoint, loadingDeliveryPooint, errorDeliveryPooint] = useRequest(() => getCurrentDeliveryPoint(), [])
    const [dataBankCard, laodingBankCard, errorBankCard]= useRequest(() => getCurrentBankCard(), [])

    const [curDelPoint, setCurDelPoint] = useState({})
    const [curBankCard, setCurBankCard] = useState({})

    const [existsDelPoint, setExistsDelPoint] = useState(false)
    const [existsBankCard, setExistsBankCard] = useState(false)

    useEffect(() => {
        if (dataDeliveryPoint && !loadingDeliveryPooint) {
            setCurDelPoint(dataDeliveryPoint)
            setExistsDelPoint(true)
        }
    }, [dataDeliveryPoint, loadingDeliveryPooint])


    useEffect(() => {
        if (dataBankCard && !laodingBankCard) {
            setCurBankCard(dataBankCard)
            setExistsBankCard(true)
        }
    }, [dataBankCard, laodingBankCard])

    
    

    return (
            <div className='cartInfo'>
                <div className='cartInfoStickyWrapper'>
                    <MakingPurchase totalValues={totalValues} existsDelPoint={existsDelPoint} existsBankCard={existsBankCard} />
                    <DeliveryPoint curDelPoint={curDelPoint} />
                    <PaymentMethod curBankCard={curBankCard} />
                </div>
            </div>
    )
}

export default CartInfo;
