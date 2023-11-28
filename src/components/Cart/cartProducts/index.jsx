import React from 'react';

import CartItem from '../cartItem';
import NoSection from '../../General/noSection';

import checkmark from './../../../assets/images/cart/checkmark.svg';

import './index.scss';




const CartProducts = () => {



    return (
            <div>
                <div className="cartSelectAll">
                    <div className="checkmarkContainer">
                        <img src={checkmark} className="selectAll-checkmark" />
                    </div>

                    <p className="cartSelectAll-text">Всё</p>
                </div>

                <div className="cartProductsWrapper">
                    {/* Цикл */}

                    {/* <NoSection message={'Товаров нет'} additionalClass={'cartNoSect'} /> */}

                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
            </div>
    )
}

export default CartProducts;
