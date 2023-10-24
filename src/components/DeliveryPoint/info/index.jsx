import React from "react";

import "./index.scss";





const Info = ({ city, schedule, address }) => (



    <section className="delivery_point_info">
        <div className="delivery_point_info__item">
            <h1 className="delivery_point_info__title">
                Адрес:
            </h1>  

            <div className="delivery_point_info__text">
                <p className="delivery_point_info__paragraph delivery_point_info__city">
                    Город: {city}
                </p>

                <p className="delivery_point_info__paragraph delivery_point_info__street">
                    {address}
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
                    {schedule}
                </p>
            </div> 
        </div> 

    </section>
)

export default Info;