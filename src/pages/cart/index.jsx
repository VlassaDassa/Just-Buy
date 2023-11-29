import React, { useEffect, useState } from "react";

import Title from "../../components/General/title";
import CartProducts from "../../components/Cart/cartProducts";
import CartInfo from "../../components/Cart/cartInfo";

import './index.scss';




const Cart = () => {
    const [countProducts, setCountProducts] = useState(0)
    const [selectedProducts, setSelectedProducts] = useState([])
    
    useEffect(() => {
        document.title = 'Корзина'
    }, [])


    return (
        <main className="Cart">
            <div className="container">
                <div className="cart-TitleWrapper">
                    <Title title="Корзина" additionalClass="cartTitle" />
                    <span className="cartTitle-countProducts">{countProducts}</span>
                </div>


                <div className="cartContainer">
                    <CartProducts 
                        setCountProducts={setCountProducts} 
                        selectedProducts={selectedProducts} 
                        setSelectedProducts={setSelectedProducts}
                    />
                    <CartInfo selectedProducts={selectedProducts} />
                </div>

            </div>
        </main>
    )
}

export default Cart;