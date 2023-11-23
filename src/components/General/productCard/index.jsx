import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { showError } from './../../../hooks/showError';

import sendToCart from '../../../store/sendToCart';
import overlay from '../../../store/overlay';
import noScroll from '../../../store/noScroll';

import heart from './../../../assets/images/product_card/heart.svg';
import heartFill from './../../../assets/images/product_card/heart-small-fill.svg';
import cartImg from './../../../assets/images/product_card/cart.svg';
import cartFill from './../../../assets/images/product_card/cart-fill.svg';
import trash from './../../../assets/images/cart/trash.svg'

import { addCartProduct, removeCartProductFromProdId, getSizesAndColors } from './../../../api/cartAPI'

import './index.scss';





const ProductCard = observer(({
        name,
        photo,
        price,
        rating,
        countFeedback,
        product_id,
        inCart,
        setInCart,

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
    
   
    const addToCart = async (product_id) => {

        // Request for get relate inputs
        try {
            const response = await getSizesAndColors(product_id);
            
            if (response.status !== 200) {
                showError('Ошибка при добавлении товара');
                throw new Error('Ошибка при получении данных');
            }
            const colorsAndSizes = await response.data;


            // Just add to cart, because product have not sizes or colors
            if (!colorsAndSizes['exists']) {
                const data = {
                    'count': colorsAndSizes.count,
                    'product_id': product_id,
                }

                addCartProduct(data)
                .then(response => {
                    if (response.status !== 200) {
                        showError('Ошибка при добавлении товара')
                    }
                    else {
                        setInCart([...inCart, product_id])
                    }
                    })
                .catch(error => {
                    showError('Ошибка при добавлении товара')
                })
            }


            // Show popup for colors
            else if (colorsAndSizes['exists_colors']) {
                sendToCart.toggleShow(true)
                sendToCart.setProductId(product_id)
                sendToCart.setColors(colorsAndSizes.colors)

                overlay.toggleShow(true)
                noScroll.toggleScroll(false)
            }


            // Show popup for sizes
            else if (colorsAndSizes['exists_sizes']) {
                sendToCart.toggleShow(true)
                sendToCart.setProductId(product_id)
                sendToCart.setSizes(colorsAndSizes.sizes)

                overlay.toggleShow(true)
                noScroll.toggleScroll(false)
            }


            // Show popup "SendToCart", if product have sizes and colors
            else if (colorsAndSizes['exists_relateInputs']) {
                sendToCart.toggleShow(true)
                sendToCart.setProductId(product_id)
                sendToCart.setRelateInputs(colorsAndSizes.relateInputs)

                overlay.toggleShow(true)
                noScroll.toggleScroll(false)
            }


        } catch (error) {
            showError('Ошибка при добавлении товара');
            console.error(error);
        }
    }


    const removeInCart = (product_id) => {
        removeCartProductFromProdId(product_id)
        .then(response => {
            if (response.status !== 200) {
                showError('Ошибка при удалении товара')
            }
            else {
                setInCart(inCart.filter(item => item !== product_id))
            }
        })
        .catch(error => {
            showError('Ошибка при удалении товара')
        })
    }

    return (
        <div className="products__item">
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
                                    src={inCart?.includes(product_id) ? cartFill: cartImg} 
                                    className={inCart?.includes(product_id) ? defaultCartClass: activeCartClass}
                                    onClick={() => {
                                        if (inCart?.includes(product_id)) {
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
                                    className={inCart?.includes(product_id) ? activeMobileCart : defaultMobileCart}
                                    onClick={() => {
                                        if (inCart?.includes(product_id)) {
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
