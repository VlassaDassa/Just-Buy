import React, { useEffect, useState } from 'react';

import MakingPurchase from '../makingPurchase';
import DeliveryPoint from '../deliveryPoint';
import PaymentMethod from '../paymentMethod';

import useRequest from '../../../hooks/useRequest';
import { getCurrentBankCard } from '../../../api/profileAPI';
import { getCurrentDeliveryPoint } from '../../../api/deliveryPointAPI';

import './index.scss';





const CartInfo = ({ totalValues, setTotalValues, sendData, setSendData, cartProducts, setCartProducts, setIsVisibleSuccess, selectedProducts, setSelectedProducts }) => {
    const [dataDeliveryPoint, loadingDeliveryPooint, errorDeliveryPoint] = useRequest(() => getCurrentDeliveryPoint(localStorage.getItem('user_id')), [])
    const [dataBankCard, laodingBankCard, errorBankCard]= useRequest(() => getCurrentBankCard(localStorage.getItem('user_id')), [])

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
        if (dataBankCard && dataBankCard.length > 0 && !laodingBankCard) {
            setCurBankCard(dataBankCard)
            setExistsBankCard(true)
        }
    }, [dataBankCard, laodingBankCard])


    return (
            <div className='cartInfo'>
                <div className='cartInfoStickyWrapper'>
                    <MakingPurchase 
                        totalValues={totalValues}
                        setTotalValues={setTotalValues}

                        existsDelPoint={existsDelPoint} 
                        existsBankCard={existsBankCard}

                        curDelPoint={curDelPoint} 
                        curBankCard={curBankCard}

                        sendData={sendData}
                        setSendData={setSendData}

                        cartProducts={cartProducts}
                        setCartProducts={setCartProducts}

                        setIsVisibleSuccess={setIsVisibleSuccess}

                        selectedProducts={selectedProducts}
                        setSelectedProducts={setSelectedProducts}
                    />
                    <DeliveryPoint curDelPoint={curDelPoint} />
                    <PaymentMethod curBankCard={curBankCard} />
                </div>
            </div>
    )
}

export default CartInfo;
