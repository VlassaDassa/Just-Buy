import React, {useState} from "react";
import CartProducts from "../cartProducts";
import CartInfo from "../cartInfo";
import trash from "../../../assets/images/cart/trash.svg";
import book_1 from "../../../assets/images/cart/book_1.jpg";
import book_2 from "../../../assets/images/cart/book_2.jpg";
import book_3 from "../../../assets/images/cart/book_3.jpg";
import book_4 from "../../../assets/images/cart/book_4.jpg";
import book_5 from "../../../assets/images/cart/book_5.jpg";
import "./index.scss";

const CartBar = () => {
    const [selectAll, setSelectAll] = useState(false);


    const products = [
        { id: 1, name: 'Книга / Атлант расправил плечи', price: 373, count: 1, image: book_1 },
        { id: 2, name: 'Товар 2', price: 20, count: 1, image: book_2 },
        { id: 3, name: 'Товар 2', price: 20, count: 1, image: book_3 },
        { id: 4, name: 'Товар 2', price: 20, count: 1, image: book_4 },
        { id: 5, name: 'Товар 2', price: 20, count: 1, image: book_5 },
    ]

    const handleSelectAllChange = () => {
        setSelectAll(!selectAll);
        // console.log(selectAll);
    }


    return (
        
        <>
            <div className="cart__header">
                <h1 className="cart__title">
                    Корзина <span className="cart__count_items">{products.length}</span>
                </h1>

                <label className={`cart__checkbox ${selectAll && 'cart__checkbox_all'}`}>Всё
                    <input 
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAllChange}/>
                    <span className={`cart__checkmark ${selectAll && 'cart__checkmark_all'}`}></span>
                </label>
            </div>
            {products.length === 0 &&
                <div className="no_section cart_no_prod"> В корзине пусто </div>
            }
            <CartProducts products={products} selectAll={selectAll}/>
            <CartInfo />
        </>
        
    )
}


export default CartBar;