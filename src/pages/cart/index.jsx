import React, { useEffect, useState } from "react";
import { CSSTransition } from 'react-transition-group';

import Title from "../../components/General/title";
import CartProducts from "../../components/Cart/cartProducts";
import CartInfo from "../../components/Cart/cartInfo";
import SuccessMessage from "../../components/General/successMessage";

import './index.scss';




const Cart = () => {
    const [isVisibleSuccess, setIsVisibleSuccess] = useState(false)

    const [cartProducts, setCartProducts] = useState([])

    const [countProducts, setCountProducts] = useState(0)           // Количество экземпляров продуктов, не считая счётчик внутри
    const [totalValues, setTotalValues] = useState({})                 // Общее количество, основанное на счётчике внутри
    const [selectedProducts, setSelectedProducts] = useState([])

    const [sendData, setSendData] = useState([])                      // Данные для отправки на сервер

    
    useEffect(() => {
        document.title = 'Корзина'
    }, [])


    return (
        <main className="Cart">
            <CSSTransition
                in={isVisibleSuccess}
                key={'transSuccessMessage'}
                timeout={4000}
                classNames="success"
            >
                <SuccessMessage message={'Товар успешно куплен!'} setIsVisibleSuccess={setIsVisibleSuccess} />
            </CSSTransition>

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

                        totalValues={totalValues}
                        setTotalValues={setTotalValues}

                        sendData={sendData}
                        setSendData={setSendData}

                        cartProducts={cartProducts}
                        setCartProducts={setCartProducts}
                    />

                    <CartInfo
                        totalValues={totalValues}
                        setTotalValues={setTotalValues}

                        sendData={sendData}
                        setSendData={setSendData}

                        cartProducts={cartProducts}

                        setCartProducts={setCartProducts} 
                        setIsVisibleSuccess={setIsVisibleSuccess}

                        selectedProducts={selectedProducts}
                        setSelectedProducts={setSelectedProducts}
                    />
                </div>

            </div>
        </main>
    )
}

export default Cart;