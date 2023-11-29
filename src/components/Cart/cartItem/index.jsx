import React from 'react';

import testImg from './../../../assets/images/product_card/book_1.jpg';
import arrow from './../../../assets/images/cart/arrow.svg';
import trash from './../../../assets/images/cart/trash.svg';
import checkmark from './../../../assets/images/cart/checkmark.svg';

import './index.scss';




const CartItem = ({
        photo, size, size_value, color_value, count, name, price, product_id,
        selectedProducts, setSelectedProducts
    }) => {

    const formattedPrice = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    }).format(price);


    const handleSelectProd = () => {
        if (selectedProducts.includes(product_id)) {
            setSelectedProducts(selectedProducts.filter(item => item !== product_id))
        }

        else {
            setSelectedProducts([...selectedProducts, product_id])
        }
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
                            <input autoComplete="off" type="asd" className="cartItemCount" placeholder='0' maxLength={4} id="cartItemCount" />

                            <div className="cartItem-plus"><img src={arrow} className="cartItem-arrowRight"/></div>
                            <div className="cartItem-minus"><img src={arrow} className="cartItem-arrowLeft"/></div>
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
                    <div className="cartItemDelete">
                        <img src={trash} className='cartItem-trashIco' />
                    </div>
                </div>
            </div>
    )
}

export default CartItem;
