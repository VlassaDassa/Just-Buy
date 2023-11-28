import React, { useEffect } from "react";

import Title from "../../components/General/title";
import CartProducts from "../../components/Cart/cartProducts";
import CartInfo from "../../components/Cart/cartInfo";

import './index.scss';




const Cart = () => {
    
    useEffect(() => {
        document.title = 'Корзина'
    }, [])




    return (
        <main className="Cart">
            <div className="container">
                <div className="cart-TitleWrapper">
                    <Title title="Корзина" additionalClass="cartTitle" />
                    <span className="cartTitle-countProducts">4</span>
                </div>


                <div className="cartContainer">
                    <CartProducts />
                    <CartInfo />
                </div>

            </div>
        </main>
    )
}

export default Cart;