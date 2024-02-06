import React, { useState, useEffect } from 'react';

import CartItem from '../cartItem';
import NoSection from '../../General/noSection';

import useRequest from '../../../hooks/useRequest';
import { getCartProducts } from '../../../api/cartAPI';

import checkmark from './../../../assets/images/cart/checkmark.svg';

import './index.scss';




const CartProducts = ({ setCountProducts, selectedProducts, setSelectedProducts, totalValues, setTotalValues, sendData, setSendData, cartProducts, setCartProducts }) => {
    const [data, loading, error] = useRequest(() => getCartProducts(localStorage.getItem('user_id')), []) 
    

    useEffect(() => {
        if (data && !loading) {
            setCartProducts(data)
        }
    }, [data, loading])


    useEffect(() => {
        setCountProducts(cartProducts.length)
    }, [cartProducts])


    const handleSelectAll = () => {
        if (cartProducts.length > 0 && cartProducts.length === selectedProducts.length) {
            setSelectedProducts([])
        }

        else {
            setSelectedProducts(cartProducts.map((item) => item.id))
        }
    }


    return (
            <div>
                <div className="cartSelectAll"  onClick={handleSelectAll}>
                    <div className="checkmarkContainer">
                        {
                            cartProducts.length > 0 && cartProducts.length === selectedProducts.length ?
                                <img src={checkmark} className="selectAll-checkmark" />
                            :
                                null
                        }
                        
                    </div>

                    <p className="cartSelectAll-text">Всё</p>
                </div>

                <div className="cartProductsWrapper">

                    {cartProducts.length > 0 ?
                        cartProducts.map((item) => (
                            <CartItem
                                key={item.id}
                                photo={item.main_photo}
                                size={item.size}
                                size_value={item.size_value}
                                color_value={item.color_value}
                                count={item.count}
                                name={item.name}
                                price={item.price}
                                
                                item_id={item.id}
                                product_id={item.product_id}

                                selectedProducts={selectedProducts} 
                                setSelectedProducts={setSelectedProducts}

                                totalValues={totalValues}
                                setTotalValues={setTotalValues}

                                cartProducts={cartProducts}
                                setCartProducts={setCartProducts}

                                sendData={sendData}
                                setSendData={setSendData}
                            />
                        ))
                    :
                        <NoSection message={'Товаров нет'} additionalClass={'cartNoSect'} />  
                    }

                </div>
            </div>
    )
}

export default CartProducts;
