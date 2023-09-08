import React from "react";
import trash from "../../../assets/images/cart/trash.svg";
import book_1 from "../../../assets/images/cart/book_1.jpg";
import book_2 from "../../../assets/images/cart/book_2.jpg";
import book_3 from "../../../assets/images/cart/book_3.jpg";
import book_4 from "../../../assets/images/cart/book_4.jpg";
import book_5 from "../../../assets/images/cart/book_5.jpg";
import "./index.scss";


const CartProducts = () => {
    return (
        <div className="products">
            {/* <!-- <div className="no_section cart_no_prod">
                В корзине пусто
            </div> --> */}
            <div data-prod-id="1" className="products__item">
                <div className="products__photo_wrapper">
                    <img src={trash} className="products__mobile_trash"/>
                        <label className="cart__checkbox cart__checkbox_item">
                            <input type="checkbox"/>
                                <span className="cart__checkmark cart__checkmark_item"></span>
                        </label>
                        <a href="product.html"><img className="products__photo" src={book_1}/></a>
                </div>

                <div className="products__description">

                    <p className="products__price">373 ₽</p>
                    <p className="products__name"><a href="product.html">Книга / Атлант расправил плечи</a></p>

                    <div className="products__count">
                        <span className="products__count-plus"></span>

                        <span className="products__count_text">1</span>

                        <span className="products__count-minus"></span>

                        <img src={trash} className="products__count-ico"/>
                    </div>

                </div>
            </div> 

            <div data-prod-id="2" className="products__item">
                <div className="products__photo_wrapper">
                    <img src={trash} className="products__mobile_trash"/>
                        <label className="cart__checkbox cart__checkbox_item">
                            <input type="checkbox"/>
                                <span className="cart__checkmark cart__checkmark_item"></span>
                        </label>
                        <a href="product.html"><img className="products__photo" src={book_2}/></a>
                </div>

                <div className="products__description">
                    <p className="products__price">678 ₽</p>
                    <p className="products__name"><a href="product.html">Книга / Белый ужас</a></p>

                    <div className="products__count">
                        <span className="products__count-plus"></span>

                        <span className="products__count_text">1</span>

                        <span className="products__count-minus"></span>

                        <img src={trash} className="products__count-ico"/>
                    </div>

                </div>
            </div> 

            <div data-prod-id="3" className="products__item">
                <div className="products__photo_wrapper">
                    <img src={trash} className="products__mobile_trash"/>
                        <label className="cart__checkbox cart__checkbox_item">
                            <input type="checkbox"/>
                                <span className="cart__checkmark cart__checkmark_item"></span>
                        </label>

                        <a href="product.html"><img className="products__photo" src={book_3}/></a>
                </div>

                <div className="products__description">
                    <p className="products__price">373 ₽</p>
                    <p className="products__name"><a href="product.html">Книга / Ужасная рамка</a></p>

                    <div className="products__count">
                        <span className="products__count-plus"></span>

                        <span className="products__count_text">1</span>

                        <span className="products__count-minus"></span>

                        <img src={trash} className="products__count-ico"/>
                    </div>

                </div>
            </div> 

            <div data-prod-id="4" className="products__item">
                <div className="products__photo_wrapper">
                    <img src={trash} className="products__mobile_trash"/>
                        <label className="cart__checkbox cart__checkbox_item">
                            <input type="checkbox"/>
                                <span className="cart__checkmark cart__checkmark_item"></span>
                        </label>

                        <a href="product.html"><img className="products__photo" src={book_4}/></a>
                </div>

                <div className="products__description">
                    <p className="products__price">50000 ₽</p>
                    <p className="products__name"><a href="product.html">Книга / Недострой</a></p>

                    <div className="products__count">
                        <span className="products__count-plus"></span>

                        <span className="products__count_text">1</span>

                        <span className="products__count-minus"></span>

                        <img src={trash} className="products__count-ico"/>
                    </div>

                </div>
            </div> 

            <div data-prod-id="5" className="products__item">
                <div className="products__photo_wrapper">
                    <img src={trash} className="products__mobile_trash"/>
                        <label className="cart__checkbox cart__checkbox_item">
                            <input type="checkbox"/>
                                <span className="cart__checkmark cart__checkmark_item"></span>
                        </label>

                        <a href="product.html"><img className="products__photo" src={book_5}/></a>
                </div>

                <div className="products__description">
                    <p className="products__price">4589 ₽</p>
                    <p className="products__name"><a href="product.html">Книга / Коричневая книга</a></p>

                    <div className="products__count">
                        <span className="products__count-plus"></span>

                        <span className="products__count_text">1</span>

                        <span className="products__count-minus"></span>

                        <img src={trash} className="products__count-ico"/>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default CartProducts;