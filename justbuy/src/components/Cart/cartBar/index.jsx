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
        { id: 1, name: 'Книга / Атлант расправил плечи', price: 373, count: 1, image: book_1, selected: false },
        { id: 2, name: 'Товар 2', price: 20, count: 1, image: book_2, selected: false },
        { id: 3, name: 'Товар 2', price: 20, count: 1, image: book_3, selected: false },
        { id: 4, name: 'Товар 2', price: 20, count: 1, image: book_4, selected: false },
        { id: 5, name: 'Товар 2', price: 20, count: 1, image: book_5, selected: false },
    ]);

    const [selectAll, setSelectAll] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const isAllSelected = products.every((product) => product.count > 0);
        if (isAllSelected) {
          setSelectAll(true);
        } else {
          setSelectAll(false);
        }
      }, [products]);

    const toggleSelectAll = () => {
        setSelectAll(!selectAll);
        const updatedProducts = products.map((product) => ({
            ...product,
            count: selectAll ? 0 : product.count === 0 ? 1 : 0,
        }));
        setProducts(updatedProducts);
    };

    const toggleProduct = (productId) => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId) {
                return { ...product, count: product.count === 0 ? 1 : 0 };
            }
            return product;
        });
        setProducts(updatedProducts);
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
            if (product.id === productId && product.count > 1) {
                return { ...product, count: product.count - 1 };
            }
            return product;
        });
        setProducts(updatedProducts);
    };

    const removeProduct = (productId) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
    };

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
                    <input type="checkbox" onChange={toggleSelectAll} checked={selectAll} />
                    <span className="cart__checkmark cart__checkmark_all"></span>
                </label>
            </div>

            <div className="products">
                {products.map((product) => (
                    <CartProducts
                        key={product.id}
                        id={product.id}
                        price={product.price}
                        count={product.count}
                        image={product.image}
                        name={product.name}
                        onToggleProduct={toggleProduct}
                        onIncrement={incrementProduct}
                        onDecrement={decrementProduct}
                        onRemove={removeProduct}
                    />
                ))}

            </div>
            <CartInfo/>

            {/* <div className="cart_info__btn-buy">
                <button onClick={calculateTotal}>Buy</button>
            </div>
            <div className="cart_info_price__count">Total Count: {totalCount}</div>
            <div className="cart_info_price__price">Total Price: {totalPrice}</div> */}
        </>
    )

}
export default CartBar;



