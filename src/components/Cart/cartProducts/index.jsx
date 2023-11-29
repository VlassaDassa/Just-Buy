import React, { useState, useEffect } from 'react';

import CartItem from '../cartItem';
import NoSection from '../../General/noSection';

import useRequest from '../../../hooks/useRequest';
import { getCartProducts } from '../../../api/cartAPI';

import checkmark from './../../../assets/images/cart/checkmark.svg';

import './index.scss';




const CartProducts = ({ setCountProducts, selectedProducts, setSelectedProducts }) => {
    const [data, loading, error] = useRequest(() => getCartProducts(), [])
    const [cartProducts, setCartProducts] = useState([])


    useEffect(() => {
        if (data && !loading) {
            setCartProducts(data)
            setCountProducts(data.length)
        }
    }, [data, loading])


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
                <div className="cartSelectAll">
                    <div className="checkmarkContainer" onClick={handleSelectAll}>
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
                                product_id={item.id}

                                selectedProducts={selectedProducts} 
                                setSelectedProducts={setSelectedProducts}
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
