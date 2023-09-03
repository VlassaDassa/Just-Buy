import React from "react";
import "./index.scss";
import RatingPoint from "../ratingPoint";


const Info = () => {
    return (
        <section className="delivery_point_info">
            <div className="delivery_point_info__item">
                <h1 className="delivery_point_info__title">
                    Адрес:
                </h1>  

                <div className="delivery_point_info__text">
                    <p className="delivery_point_info__paragraph delivery_point_info__city">
                        Город Конаково
                    </p>

                    <p className="delivery_point_info__paragraph delivery_point_info__street">
                        Улица Проспект Ленина, дом 38
                    </p>
                </div>
            </div> 

            <div className="delivery_point_info__item">
                <h1 className="delivery_point_info__title">
                    Режим работы:
                </h1>  

                <div className="delivery_point_info__text">
                    <p className="delivery_point_info__paragraph delivery_point_info__days">
                        Ежедневно
                    </p>

                    <p className="delivery_point_info__paragraph delivery_point_info__hours">
                        С 8:00 до 21:00
                    </p>
                </div> 

            </div> 

            <button className="delivery_point_info__btn">
                Смотреть на карте
            </button>
        </section>
    )
}

export default Info;