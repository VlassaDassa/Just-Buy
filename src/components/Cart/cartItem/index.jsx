import React, { useEffect, useState } from 'react';

import arrow from './../../../assets/images/cart/arrow.svg';
import trash from './../../../assets/images/cart/trash.svg';
import checkmark from './../../../assets/images/cart/checkmark.svg';

import { showError } from '../../../hooks/showError';
import { removeCartProduct } from '../../../api/cartAPI';

import './index.scss';




const CartItem = ({
        photo, size, size_value, color_value, count, name, price, item_id, product_id,
        selectedProducts, setSelectedProducts, totalValues, setTotalValues,
        cartProducts, setCartProducts, sendData, setSendData
    }) => {
    
    const [currentCount, setCurrentCount] = useState(1)

    
    const calcPrice = currentCount !== 0 ? price * currentCount : price // Цена с учётом количества
    const formattedPrice = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    }).format(calcPrice);



    // Измненение общей цены и общего количества продуктов при изменении локального количества и выбранных продуктов
    useEffect(() => {
        setTotalValues(prevTotalValues => {
            if (selectedProducts.includes(item_id)) {
                return {
                    ...prevTotalValues,
                    ['prod' + item_id]: {
                        'count': currentCount,
                        'price': price * currentCount,
                    }
                };

            }
            
            else {
                return {
                    ...prevTotalValues,
                    ['prod' + item_id]: {
                        'count': 0,
                        'price': 0,
                    }
                };
            }
        });
    }, [currentCount, selectedProducts]);
    
    

    // Изменение данных для отправки на сервер
    useEffect(() => {
        if (selectedProducts.includes(item_id)) {
            setSendData(prevData => {
                const existingItemIndex = prevData.findIndex(item => item.item_id === item_id);
              
                if (existingItemIndex !== -1) {
                    prevData[existingItemIndex] = { ...prevData[existingItemIndex], total_count: currentCount, total_price: currentCount * price, color: cartProducts.find(item => item_id === item.id).color_value, size: cartProducts.find(item => item_id === item.id).size };
                }
                
                else {
                    prevData.push({ 'product_id': product_id, 'item_id': item_id, 'total_count': currentCount, 'total_price': currentCount * price, color: cartProducts.find(item => item_id === item.id).color_value, size: cartProducts.find(item => item_id === item.id).size });
                }
              
                return [...prevData];
            });
        }

        else {
            setSendData(prevData => prevData.filter((item) => item.item_id !== item_id))
        }

    }, [currentCount, selectedProducts])




    const handleSelectProd = () => {
        if (selectedProducts.includes(item_id)) {
            setSelectedProducts(selectedProducts.filter(item => item !== item_id))
        }

        else {
            setSelectedProducts([...selectedProducts, item_id])
        }
    }


    const handleIncrementCount = () => {
        if (currentCount + 1 > count) return

        setCurrentCount(currentCount + 1)
    }


    const handleDecrementCount = () => {
        if (currentCount - 1 === 0) return

        setCurrentCount(currentCount - 1)
    }


    const handleInputCount = (event) => {
        const currentValue = parseInt(event.target.value)
        
        if (currentValue > count) return

        if (currentValue) { 
            setCurrentCount(currentValue);
            return 
        }

        setCurrentCount(0)
    }


    const handleDeleteProduct = () => {
        removeCartProduct(item_id).then(response => {
            if (response.status !== 200) {
                showError('Не удалось удалить продукт')
                return
            }

            setCartProducts(cartProducts.filter((item) => item.id !== item_id))
            setSelectedProducts(selectedProducts.filter((item) => item !== item_id))
            setSendData(prevData => prevData.filter((item) => item.item_id !== item_id))

            setTotalValues({
                ...totalValues,
                ['prod' + item_id]: {
                    'count': 0,
                    'price': 0,
                }
            })
        })
        .catch(error => {
            showError('Не удалось удалить продукт')
            consolse.error(error)
            return
        })
    }



    return (
            <div className="cartItem">
                <img src={photo} alt="cartItem" className="cartImg" />

                <div className="cartItem-content">
                    <div className="cartItem-text">
                        <p className="cartItem-price">{formattedPrice}</p>
                        <h1 className="cartItem-name">{name}</h1>
                        {
                            size ?
                                <p className="cartItem-size">Размер:<span className="cartItem-sizeValue">{size_value}</span></p>
                            :
                                null
                        }
                        
                    </div>

                    <div className="cartItem-info">
                        <label className="labelForCount" htmlFor="cartItemCount">Количество</label>
                        
                        <div className="cartItemCountWrapper">
                            <input 
                                autoComplete="off" 
                                type="asd" 
                                className="cartItemCount" 
                                placeholder='0' 
                                maxLength={4} 
                                id="cartItemCount"

                                value={currentCount}
                                onChange={handleInputCount}
                            />

                            <div className="cartItem-plus" onClick={handleIncrementCount}>
                                <img src={arrow} className="cartItem-arrowRight"/>
                            </div>
                            <div className="cartItem-minus" onClick={handleDecrementCount}>
                                <img src={arrow} className="cartItem-arrowLeft"/>
                            </div>
                        </div>
                        
                        {
                            color_value ?
                                <div id={color_value} className="cartItem-color"></div>
                            :
                                null
                        }
                    </div>
                </div>

                <div className="cartItem-buttons">
                    <div className="cartItemSelect" onClick={handleSelectProd}>
                        {
                            selectedProducts.includes(item_id) ?
                                <img src={checkmark} className="cartItem-checkmarkIco" />
                            :
                                null
                        }
                    </div>
                    <div className="cartItemDelete" onClick={handleDeleteProduct}>
                        <img src={trash} className='cartItem-trashIco' />
                    </div>
                </div>
            </div>
    )
}

export default CartItem;
