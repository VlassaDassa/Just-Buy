import React, { useEffect, useState } from 'react';

import arrow from './../../../assets/images/cart/arrow.svg';
import trash from './../../../assets/images/cart/trash.svg';
import checkmark from './../../../assets/images/cart/checkmark.svg';

import './index.scss';




const CartItem = ({
        photo, size, size_value, color_value, count, name, price, product_id,
        selectedProducts, setSelectedProducts, totalValues, setTotalValues,
        cartProducts, setCartProducts,
    }) => {
    
    const [currentCount, setCurrentCount] = useState(0)

    
    const calcPrice = currentCount !== 0 ? price * currentCount : price // Цена с учётом количества
    const formattedPrice = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    }).format(calcPrice);


    // Измненение общей цены и общего количества продуктов при изменении локального количества и выбранных продуктов
    useEffect(() => {
        setTotalValues(prevTotalValues => {
            if (selectedProducts.includes(product_id)) {
                return {
                    ...prevTotalValues,
                    ['prod' + product_id]: {
                        'count': currentCount,
                        'price': price * currentCount,
                    }
                };

            }
            
            else {
                return {
                    ...prevTotalValues,
                    ['prod' + product_id]: {
                        'count': 0,
                        'price': 0,
                    }
                };
            }
        });
    }, [currentCount, selectedProducts]);

    


    const handleSelectProd = () => {
        if (selectedProducts.includes(product_id)) {
            setSelectedProducts(selectedProducts.filter(item => item !== product_id))
        }

        else {
            setSelectedProducts([...selectedProducts, product_id])
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
        setCartProducts(cartProducts.filter((item) => item.id !== product_id))
        setSelectedProducts(selectedProducts.filter((item) => item !== product_id))

        setTotalValues({
            ...totalValues,
            ['prod' + product_id]: {
                'count': 0,
                'price': 0,
            }
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
                            selectedProducts.includes(product_id) ?
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
