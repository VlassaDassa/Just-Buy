import React, { useState, useEffect } from "react";
import CartProducts from "../cartProducts";
import CartInfo from "../cartInfo";
import book_1 from "../../../assets/images/cart/book_1.jpg";
import book_2 from "../../../assets/images/cart/book_2.jpg";
import book_3 from "../../../assets/images/cart/book_3.jpg";
import book_4 from "../../../assets/images/cart/book_4.jpg";
import book_5 from "../../../assets/images/cart/book_5.jpg";
import "./index.scss";



const CartBar = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Книга / Атлант расправил плечи', price: 373, count: 0, image: book_1, isChecked: false },
        { id: 2, name: 'Книга / Белый ужас', price: 678, count: 0, image: book_2, isChecked: false },
        { id: 3, name: 'Книга / Ужасная рамка', price: 373, count: 0, image: book_3, isChecked: false },
        { id: 4, name: 'Книга / Недострой', price: 50000, count: 0, image: book_4, isChecked: false },
        { id: 5, name: 'Книга / Коричневая книга', price: 4589, count: 0, image: book_5, isChecked: false },
    ]);

    const [selectAll, setSelectAll] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        calculateTotal(products)
    }, [])

    useEffect(() => {
        calculateTotal(products)
    }, [products])

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
            let tempProduct = products.map((product) => {
                return { ...product, isChecked: checked, count: checked ? 1 : 0};
            });
            setProducts(tempProduct);
        } else {
            let tempProduct = products.map((product) =>
                product.name === name ? { ...product, isChecked: checked, count: checked ? 1 : 0} : product
            );
            setProducts(tempProduct);
        }
        calculateTotal(products)
    };


    const incrementProduct = (productId) => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId) {
                return { ...product, count: product.count + 1 };
            }
            return product;
        });
        setProducts(updatedProducts);
    };

    const decrementProduct = (productId) => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId && product.count > 0) {
                return { ...product, count: product.count - 1 };
            }
            return product;
        });
        setProducts(updatedProducts);
    };

    const removeProduct = (productId) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
        calculateTotal(products)
    };

    // const sortedProducts = products.filter((product) => product.isChecked === true)

    const calculateTotal = () => {
        let totalCount = 0;
        let totalPrice = 0;

        products.forEach((product) => {
            totalCount += product.count;
            totalPrice += product.price * product.count;
        });

        setTotalCount(totalCount);
        setTotalPrice(totalPrice);
    };

    return (
        <>
            <div className="cart__header">
                <h1 className="cart__title">
                    Корзина <span className="cart__count_items">{products.length}</span>
                </h1>


                <label className="cart__checkbox cart__checkbox_all"> Всё
                    <input type="checkbox" name="allSelect" onClick={calculateTotal} onChange={handleChange} checked={!products.some((product) => product?.isChecked !== true)} />
                    <span className="cart__checkmark cart__checkmark_all"></span>
                </label>
            </div>

            <div className="products">
                {products.map((product) => (
                    <CartProducts
                        product={product}
                        key={product.id}
                        handleChange={handleChange}
                        onIncrement={incrementProduct}
                        onDecrement={decrementProduct}
                        onRemove={removeProduct}
                        calculateTotal={calculateTotal}
                    />
                ))}

            </div>
            <CartInfo calculateTotal={calculateTotal} totalCount={totalCount} totalPrice={totalPrice}/>

            {/* <div className="cart_info__btn-buy">
                <button onClick={calculateTotal}>Buy</button>
            </div>
            <div className="cart_info_price__count">Total Count: {totalCount}</div>
            <div className="cart_info_price__price">Total Price: {totalPrice}</div> */}
        </>
    )

}
export default CartBar;



