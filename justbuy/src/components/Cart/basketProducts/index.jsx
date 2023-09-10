import React, { useState } from "react";
import trash from "../../../assets/images/cart/trash.svg";
import book_1 from "../../../assets/images/cart/book_1.jpg";
import book_2 from "../../../assets/images/cart/book_2.jpg";
import "./index.scss";

const ProductItem = ({ product, onCheckboxChange }) => {
    const handleCheckboxChange = (event) => {
        onCheckboxChange(product.id, event.target.checked);
    }

    return (
        <div className="products__item" data-prod-id={product.id}>
            <div className="products__photo_wrapper">
                <img className="products__mobile_trash" src={trash} alt="..." />
                <label className="cart__checkbox cart_checkbox_item">Всё
                    <input type="checkbox" className="cart__checkbox_item" onChange={handleCheckboxChange} />
                    <span className="cart__checkmark cart__checkmark all"></span>
                </label>
                <a href="product.html"><img className="products__photo" src={product.image} alt="..." /></a>
            </div>
            <div className="product__description">
                <p className="products_price">{product.price}</p>
                <p className="products__name"><a href="product.html">{product.name}</a></p>
            </div>

        </div>
    );
}

const BasketProducts = () => {
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [productIds, setProductIds] = useState([])
    const [selectedProductIds, setSelectedProductIds] = useState([])

    const products = [
        { id: 1, name: 'Книга / Атлант расправил плечи', price: 373, image: book_1 },
        { id: 2, name: 'Товар 2', price: 20, image: book_2 },
        { id: 3, name: 'Товар 2', price: 20, image: book_2 },
        { id: 4, name: 'Товар 2', price: 20, image: book_2 },
        { id: 5, name: 'Товар 2', price: 20, image: book_2 },
    ]

    const handleCheckboxChange = (id, isChecked) => {
        let updatedIds;
        if (isChecked) {
            updatedIds = [...selectedProductIds, id];
        } else {
            updatedIds = selectedProductIds.filter((selectedId) => selectedId !== id);
        }
        setSelectedProductIds(updatedIds);
    }

    const handleCheckboxAllChange = (event) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedProductIds(products.map((product) => product.id));
        } else {
            setSelectedProductIds([]);
        }
    };
    return (
        <div>
            <div className="cart__header">
                <h1 className="cart__title">Корзина</h1>
                <div className="cart__checkbox_all">
                    <input type="checkbox" onChange={handleCheckboxAllChange} />
                </div>
            </div>
            <div className="products">

                <div className="cart__checkbox">
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} onCheckboxChange={handleCheckboxChange} />
                    ))}
                </div>
            </div>
        </div>
    )

}




export default BasketProducts;