import React from "react";
import "./index.scss"

const CartInfo = () => {
    return (
        <section className="cart_info">
            <div className="cart_info__item-wrapper cart_info_price">
                <h1 className="cart_info__title">
                    Цена всего
                </h1>

                <p className="cart_info_price__count_prod">
                    Количество товаров: <span className="cart_info_price__count">0 шт</span>
                </p>

                <p className="cart_info_price__total_price">
                    Итого <span className="cart_info_price__price">0 ₽</span>
                </p>

                <button className="cart_info__btn cart_info__btn-buy">Купить</button>
            </div> 

            <div className="cart_info__item-wrapper cart_info_bank_card">
                <h1 className="cart_info__title cart_info__title-bank">
                    Карта
                </h1>

                <p className="cart_info_bank_card__bank_card">
                    522823*****9136
                </p>

                <a href="profile.html#footer" className="cart_info__btn cart_info__btn-edit_card">Изменить</a>
            </div> 

            <div className="cart_info__item-wrapper cart_point">
                <h1 className="cart_info__title">
                    Пункт выдачи
                </h1>

                <p className="cart_point__city">
                    Город: Конаково
                </p>

                {/* <!-- <p className="cart_point__city no_point">
                    Не выбран
                </p> --> */}

                <p className="cart_point__address">
                    Улица: Проспект Ленина д.38
                </p>

                <a href="delivery_point.html" className="cart_info__btn cart_point__btn-edit">Изменить</a>
            </div>
        </section>
    )
}

export default CartInfo;