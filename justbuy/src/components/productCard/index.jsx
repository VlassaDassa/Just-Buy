import React, { useState } from 'react';

import heart from './../../assets/images/product_card/heart.svg';
import heartFill from './../../assets/images/product_card/heart-small-fill.svg';
import cartImg from './../../assets/images/product_card/cart.svg';
import cartFill from './../../assets/images/product_card/cart-fill.svg';

import './index.scss';





const ProductCard = ({
        name,
        photo,
        price,
        rating,
        countFeedback,
        product_id,
    }) => {
    

    const defaultLikeClass = 'products__icon products__icon-like'
    const activeLikeClass = 'products__icon products__icon-like active'

    const defaultCartClass = 'products__icon products__icon-cart'
    const activeCartClass = 'products__icon products__icon-cart active'

    const defaultMobileCart = 'products__icon products__add_to_cart'
    const activeMobileCart = 'products__icon products__add_to_cart products__add_to_cart--active'

    const defaultMobileLike = 'products__icon products__icon-small products__icon-like'
    const activeMobileLike = 'products__icon products__icon-small products__icon-like active'

    const [like, setLike] = useState([]);
    const [cart, setCart] = useState([]);


    
    return (
        <div data-prod-id={product_id} className="products__item">
            <div className={`products__photo_wrapper`}>

                <a href="product.html">
                    <img className="products__photo" src={photo} />
                </a>
            </div>

            <div className="products__description">
                
                <div className="products__icons">
                    <img 
                        src={like.includes(product_id) ? heartFill: heart} 
                        className={like.includes(product_id) ? defaultLikeClass: activeLikeClass}
                        onClick={() => {
                            if (like.includes(product_id)) {
                            setLike(like.filter(item => item !== product_id));
                            }
                            else {
                            setLike([...like, product_id]);
                            }
                        }}
                    />

                    <img 
                        src={cart.includes(product_id) ? cartFill: cartImg} 
                        className={cart.includes(product_id) ? defaultCartClass: activeCartClass}
                        onClick={() => {
                            if (cart.includes(product_id)) {
                                setCart(cart.filter(item => item !== product_id));
                            }
                            else {
                                setCart([...cart, product_id])
                            }
                        }}
                    />

                </div>
                

                <p className={`products__price`}>
                    {price} ₽
                </p>

                <p className={`products__name`}>
                    <a href="product.html">{name}</a>
                </p>
            
                <div className="products__rating">

                        <div className={`rating__item`}>
                            <div className="products__circle"></div>
                            <p className="products__number_rating">{rating}</p>
                        </div>
                
                    
                    <div className={`products__count_feedback`}>
                        <p className="count_feedback__number">{countFeedback}</p>
                        <p className="count_feedback__text">отзывов</p>
                    </div>
                </div>

                <div className="products__mobile_btn">
                    <button 
                        className={cart.includes(product_id) ? activeMobileCart : defaultMobileCart}
                        onClick={() => {
                            if (cart.includes(product_id)) {
                                setCart(cart.filter(item => item !== product_id));
                            }
                            else {
                                setCart([...cart, product_id])
                            }
                        }}
                    >
                        В корзину
                    </button>

                    <img 
                        className={like.includes(product_id) ? activeMobileLike : defaultMobileLike}
                        src={like.includes(product_id) ? heartFill: heart} 
                        onClick={() => {
                            if (like.includes(product_id)) {
                              setLike(like.filter(item => item !== product_id));
                            }
                            else {
                              setLike([...like, product_id]);
                            }
                          }}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
