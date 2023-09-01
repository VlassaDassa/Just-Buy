import React from "react";
import "./index.scss";
import point_1 from "../../../assets/images/delivery_point/point_1.jpg";
import point_2 from "../../../assets/images/delivery_point/point_2.jpg";
import point_3 from "../../../assets/images/delivery_point/point_3.jpg";

const Location = () => {
    return (
        <section className="location">
            <h1 className="location__title">
                Пункт выдачи
            </h1>
            
            <div className="location_wrapper">
                <div className="location__photo_slider">
                    <div className="location__photo_wrapper">
                        <a href="http://localhost:3000/images/dest/profile/point_1.jpg">
                            <img src={point_1} className="location__photo location__photo-selected"/>
                            <img src={point_2} className="location__photo"/>
                            <img src={point_3} className="location__photo"/>
                        </a>
                    </div>
                    
                    <div className="location__photo_pgn">
                        <img src={point_1} className="location__photo_pgn_item location__photo_pgn_item-selected"/>
                        <img src={point_2} className="location__photo_pgn_item"/>
                        <img src={point_3} className="location__photo_pgn_item"/>
                    </div>

                    <button className="mobile_map__button">
                        Выбрать пункт выдачи
                    </button>
                </div> 


                <div className="map">
                    <div id="map">
                        <button className="map__btn_close">Закрыть</button>
                    </div>

                    <button className="map__button">
                        Выбрать пункт выдачи
                    </button>
                </div> 

                <section className="mobile_delivery_point_info ">
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
            </div> 

        </section>
    )
};

export default Location;