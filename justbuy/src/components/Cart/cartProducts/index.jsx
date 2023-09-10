import React from "react";
import trash from "../../../assets/images/cart/trash.svg";
import "./index.scss";
import classes from "./index.scss";


const CartProducts = ({ products, selectAll, handleProductCheckboxChange }) => {
    console.log(selectAll);
    return (
        <div className="products">
            {products.map((product) => (
                <div data-prod-id={products.id} className="products__item">
                    <div className="products__photo_wrapper">
                        <img src={trash} className="products__mobile_trash" alt="..." />
                        <label className={`cart__checkbox ${selectAll && 'cart__checkbox_item'}`}>
                        
                            <input type="checkbox"
                                    checked={selectAll}
                                    onChange={handleProductCheckboxChange}/>
                            
                            <span className={`cart__checkmark ${selectAll && 'cart__checkmark_item'}`}></span>
                        </label>

                        <img className="products__photo" src={product.image} alt="..." />
                    </div>
                    <div className="products__description">
                        <p className="products__price">{product.price}</p>
                        <p className="products__name"><a href="product.html">{product.name}</a></p>

                        <div className="products__count">
                            <span className="products__count-plus"></span>

                            <span className="products__count_text">{product.count}</span>

                            <span className="products__count-minus"></span>

                            <img src={trash} className="products__count-ico" alt="..." />
                        </div>
                    </div>

                </div>
            ))
            }

        </div>
    )
}

export default CartProducts;