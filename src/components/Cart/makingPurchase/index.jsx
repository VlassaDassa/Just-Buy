import React from 'react';

import CartInfoButton from '../cartInfoButton';
import { sendPurchasedGoods } from '../../../api/cartAPI';
import { showError } from '../../../hooks/showError';

import './index.scss';



const MakingPurchase = ({ 
        totalValues,
        setTotalValues,

        existsDelPoint, 
        existsBankCard, 
        curDelPoint, 
        curBankCard, 
        
        sendData,
        setSendData,

        cartProducts, 
        setCartProducts, 
        setIsVisibleSuccess,

        selectedProducts,
        setSelectedProducts
    }) => {

    const totalQuantity = Object.values(totalValues).reduce((totalCount, currentProduct) => totalCount + currentProduct.count, 0);
    const totalAmount = Object.values(totalValues).reduce((totalPrice, currentProduct) => totalPrice + currentProduct.price, 0);

    const formattedPrice = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    }).format(totalAmount);


    const sendToServer = () => {
        const delPointId = curDelPoint.length > 0 ? curDelPoint[0].id : null 
        const bankCardId = curBankCard.length > 0 ? curBankCard[0].id : null
        var readyData = {'prod_data': sendData, 'bank_card_id': bankCardId, 'delivery_point_id': delPointId}

        sendPurchasedGoods(readyData)
            .then(response => {
                if (response.status !== 200) {
                    showError('Не удалось оформить покупку')
                    return
                }
                setSelectedProducts(selectedProducts.filter(item => !readyData.prod_data.some(readyProduct => readyProduct.item_id === item)))
                setCartProducts(cartProducts.filter(product => !readyData.prod_data.some(readyProduct => readyProduct.item_id === product.id)))
                

                // Очистка totalValues и readyData
                const itemIdsToRemove = readyData.prod_data.map(item => item.item_id);
                const updatedTotalValues = Object.fromEntries(
                    Object.entries(totalValues).filter(([key]) => !itemIdsToRemove.includes(parseInt(key.slice(4))))
                );
                
                setTotalValues(updatedTotalValues);
                setSendData({})

                setIsVisibleSuccess(true)
            })

            .catch(error => {
                showError('Не удалось оформить покупку')
                console.error(error)
            })
    }


    return (
            <div className="cartInfoItem">
                <CartInfoButton text={'Перейти к покупке'} disabled={!existsBankCard || !existsDelPoint || totalQuantity === 0} handler={sendToServer} />

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
