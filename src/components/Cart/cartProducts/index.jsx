import React, { useState } from "react";
import trash from "../../../assets/images/cart/trash.svg";
import "./index.scss";


const CartProducts = (props) => {
    const { product, handleChange, onIncrement, onDecrement, onRemove, calculateTotal } = props;

    return (


        <div data-prod-id={product.id} className="products__item" key={product.id}>
            <div className="products__photo_wrapper">

                <img src={trash} className="products__mobile_trash" alt="..." />

                <label className="cart__checkbox cart__checkbox_item">
                    <input type="checkbox" onClick={calculateTotal} name={product.name} onChange={handleChange} checked={product?.isChecked || false}/>
                    <span className="cart__checkmark cart__checkmark_item"></span>
                </label>

                <img className="products__photo" src={product.image} alt="..." />

            </div>
            <div className="products__description">

                <p className="products__price">{product.price} ₽</p>

                <p className="products__name"><a href="product.html">{product.name}</a></p>
                <div className="products__count">
                    <span className="products__count-plus" onClick={() => onIncrement(product.id)}></span>

                    <span className="products__count_text">{product.count}</span>

                    <span className="products__count-minus" onClick={() => onDecrement(product.id)}></span>

                    <img src={trash} className="products__count-ico" alt="..." onClick={() => onRemove(product.id)}/>
                </div>

            </div>

        </div>

        
    )
}

export default CartProducts;