import React from 'react';

import testImg from './../../../assets/images/product_card/book_1.jpg';
import arrow from './../../../assets/images/cart/arrow.svg';
import trash from './../../../assets/images/cart/trash.svg';
import checkmark from './../../../assets/images/cart/checkmark.svg';

import './index.scss';




const CartItem = () => {



    return (
            <div className="cartItem">
                <img src={testImg} alt="cartItem" className="cartImg" />

                <div className="cartItem-content">
                    <div className="cartItem-text">
                        <p className="cartItem-price">455 ₽</p>
                        <h1 className="cartItem-name">Брюки женские</h1>
                        <p className="cartItem-size">Размер:<span className="cartItem-sizeValue">45</span></p>
                    </div>

                    <div className="cartItem-info">
                        <label className="labelForCount" htmlFor="cartItemCount">Количество</label>
                        
                        <div className="cartItemCountWrapper">
                            <input autocomplete="off" type="asd" className="cartItemCount" placeholder='0' maxLength={4} id="cartItemCount" />

                            <div className="cartItem-plus"><img src={arrow} className="cartItem-arrowRight"/></div>
                            <div className="cartItem-minus"><img src={arrow} className="cartItem-arrowLeft"/></div>
                        </div>

                        <div id='pink' className="cartItem-color"></div>
                    </div>
                </div>

                <div className="cartItem-buttons">
                    <div className="cartItemSelect">
                        <img src={checkmark} className="cartItem-checkmarkIco" />
                    </div>
                    <div className="cartItemDelete">
                        <img src={trash} className='cartItem-trashIco' />
                    </div>
                </div>
            </div>
    )
}

export default CartItem;
