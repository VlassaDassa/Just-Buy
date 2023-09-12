import React, { useState } from "react";
import trash from "../../../assets/images/cart/trash.svg";
import "./index.scss";


const CartProducts = (props) => {
    const { id, price, count, name, image, onToggleProduct, onIncrement, onDecrement, onRemove } = props;

    return (


        <div data-prod-id={id} className="products__item" key={id}>
            <div className="products__photo_wrapper">

                <img src={trash} className="products__mobile_trash" alt="..." />

                <label className="cart__checkbox cart__checkbox_item">
                    <input type="checkbox" onChange={() => onToggleProduct(id)} checked={count > 0}/>
                    <span className="cart__checkmark cart__checkmark_item"></span>
                </label>

                <img className="products__photo" src={image} alt="..." />

            </div>
            <div className="products__description">

                <p className="products__price">{price}</p>

                <p className="products__name"><a href="product.html">{name}</a></p>
                <div className="products__count">
                    <span className="products__count-plus" onClick={() => onIncrement(id)}></span>

                    <span className="products__count_text">{count}</span>

                    <span className="products__count-minus" onClick={() => onDecrement(id)}></span>

                    <img src={trash} className="products__count-ico" alt="..." onClick={() => onRemove(id)}/>
                </div>

            </div>

        </div>

        
    )
}

export default CartProducts;