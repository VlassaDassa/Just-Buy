import React from "react";
import CartBar from "../../components/Cart/cartBar";
import BasketProducts from "../../components/Cart/basketProducts";

const Cart = () => {
    return (
        <main className="Cart">
            <div className="container">
                <CartBar/>
                {/* <BasketProducts/> */}
            </div>
        </main>
    )
}

export default Cart;