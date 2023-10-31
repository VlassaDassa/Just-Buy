import React, { useEffect } from "react";

import CartBar from "../../components/Cart/cartBar";

import './index.scss';


const Cart = () => {
    
    useEffect(() => {
        document.title = 'Корзина'
    }, [])

    return (
        <main className="Cart">
            <div className="container">
                <CartBar/>
            </div>
        </main>
    )
}

export default Cart;