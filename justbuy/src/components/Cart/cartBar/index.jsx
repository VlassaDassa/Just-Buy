import React from "react";
import CartProducts from "../cartProducts";
import CartInfo from "../cartInfo"
import "./index.scss";

const CartBar = () => {
    return (
        <main className="cart">
            <div className="container">
                <div className="cart__header">
                    <h1 className="cart__title">
                        Корзина <span className="cart__count_items">5</span>
                    </h1>

                    <label className="cart__checkbox cart__checkbox_all">Всё
                        <input type="checkbox" />
                            <span className="cart__checkmark cart__checkmark_all"></span>
                    </label>
                </div>
                <CartProducts/>
                <CartInfo />
            </div>
        </main>
    )
}

export default CartBar;