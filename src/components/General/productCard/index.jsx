import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { CSSTransition } from 'react-transition-group';

import SendToCart from '../sendToCart';

import { showError } from './../../../hooks/showError';

import sendToCart from '../../../store/sendToCart';
import overlay from '../../../store/overlay';
import noScroll from '../../../store/noScroll';

import useRequest from '../../../hooks/useRequest';
import { getRelateInputs } from '../../../api/cartAPI';

import heart from './../../../assets/images/product_card/heart.svg';
import heartFill from './../../../assets/images/product_card/heart-small-fill.svg';
import cartImg from './../../../assets/images/product_card/cart.svg';
import cartFill from './../../../assets/images/product_card/cart-fill.svg';
import trash from './../../../assets/images/cart/trash.svg'

import { addCartProduct, removeCartProductFromProdId } from './../../../api/cartAPI'

import './index.scss';





const ProductCard = observer(({
        name,
        photo,
        price,
        rating,
        countFeedback,
        product_id,
        is_in_cart,

        likeShow,
        cartShow,
        onRoad,

        cartPage,
        cartPageOptions,
        isChecked,
        count,
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
    const [cart, setCart] = useState(is_in_cart);
    
    // For popup "Send to cart"
    const [data, error, loading] = useRequest(() => getRelateInputs(product_id), [])
    const [existsRelateInputs, setExistsRelateInputs] = useState(false)
    const [relateInputs, setRelateInputs] = useState([])


    useEffect(() => {
        if (data && !loading) {
            if (data.exists) {
                setExistsRelateInputs(true)
                setRelateInputs(data.relateInputs)
            }

            else {
                setExistsRelateInputs(false)
            }
        }
    }, [data, loading])


    const addToCart = (product_id) => {
        // addCartProduct(product_id)
        // .then(response => {
        //     if (response.status !== 200) {
        //         showError('Ошибка при добавлении товара')
        //     }
        //     else {
        //         setCart(true)
        //     }
        //     })
        // .catch(error => {
        //     showError('Ошибка при добавлении товара')
        // })

        sendToCart.toggleShow(true)
        sendToCart.setProductId(product_id)
        overlay.toggleShow(true)
        noScroll.toggleScroll(false)
    }


    const removeInCart = (product_id) => {
        removeCartProductFromProdId(product_id)
        .then(response => {
            if (response.status !== 200) {
                showError('Ошибка при удалении товара')
            }
            else {
                setCart(false);
            }
        })
        .catch(error => {
            showError('Ошибка при удалении товара')
        })
    }


    return (
        <div className="products__item">

            {/* <CSSTransition
                in={sendToCart.productId === product_id && sendToCart.show && existsRelateInputs}
                unmountOnExit
                key={'sendToCartTrans'}
                timeout={500}
                classNames="sendToCartTrans"
            >
                <SendToCart relateInputs={relateInputs} />
            </CSSTransition> */}


            <SendToCart relateInputs={relateInputs} />



            <div className={`products__photo_wrapper`}>
                {
                    cartPage ?
                        <>
                            <img src={trash} className="products__mobile_trash" onClick={() => cartPageOptions.onRemove(product_id)} />

                            <label className="cart__checkbox cart__checkbox_item">
                                <input type="checkbox" onClick={cartPageOptions.calculateTotal} name={name} onChange={cartPageOptions.handleChange} checked={isChecked || false} />
                                <span className="cart__checkmark cart__checkmark_item"></span>
                            </label>
                        </>
                    :
                        null
                }
                <a href="product.html">
                    <img className="products__photo" src={photo} />
                </a>
            </div>

            {
                cartPage ?
                    <div className="products__description">

                        <p className="products__price">{price} ₽</p>

                        <p className="products__name"><a href="product.html" title={name}>{name}</a></p>
                        <div className="products__count">
                            <span className="products__count-plus" onClick={() => cartPageOptions.onIncrement(product_id)}></span>

                            <span className="products__count_text">{count}</span>

                            <span className="products__count-minus" onClick={() => cartPageOptions.onDecrement(product_id)}></span>

                            <img src={trash} className="products__count-ico" onClick={() => cartPageOptions.onRemove(product_id)}/>
                        </div>

                    </div>
                :
                    <div className="products__description">
                        <div className="products__icons">

                            {likeShow &&
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
                            }
                            
                            {cartShow &&
                                <img 
                                    src={cart ? cartFill: cartImg} 
                                    className={cart ? defaultCartClass: activeCartClass}
                                    onClick={() => {
                                        if (cart) {
                                            removeInCart(product_id)
                                        }
                                        else {
                                            addToCart(product_id)
                                        }
                                    }}
                                />
                            }
                        </div>
                        

                        <p className={`products__price`}>
                            {price} ₽
                        </p>

                        <p className={`products__name`}>
                            <a href="product.html" title={name}>{name}</a>
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
                        
                        {cartShow && likeShow && 
                            <div className="products__mobile_btn">
                                <button 
                                    className={cart ? activeMobileCart : defaultMobileCart}
                                    onClick={() => {
                                        if (cart) {
                                            removeInCart(product_id)
                                        }
                                        else {
                                            addToCart(product_id)
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
                        }
                        
                    </div>
            }

            
            
            {onRoad && <p className="products__awaiting_text">Ожидается 3 сентября</p>}
        </div>
    )
})

export default ProductCard;
