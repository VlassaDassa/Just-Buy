import React from "react";
import "./index.scss";
import star from "../../../assets/images/delivery_point/star.svg";
import star_fill from "../../../assets/images/delivery_point/star_fill.svg"

const Feedbacks = () => {
    return (
        <section className="delivery_point_feedback">
            <div className="delivery_point_feedback__header">
                <p className="delivery_point_feedback__numerical_rating">
                    4.0
                </p>

                <div className="delivery_point_feedback__rating">
                    <img className="delivery_point_feedback__rating_ico" src={star_fill} alt="..."/>
                    <img className="delivery_point_feedback__rating_ico" src={star_fill} alt="..."/>
                    <img className="delivery_point_feedback__rating_ico" src={star_fill} alt="..."/>
                    <img className="delivery_point_feedback__rating_ico" src={star_fill} alt="..."/>
                    <img className="delivery_point_feedback__rating_ico" src={star} alt="..."/>
                </div>

                <p className="delivery_point_feedback__count">2300 отзывов</p>

            </div> 

            <div className="delivery_point_feedback__items">
                <div className="delivery_point_feedback_item">
                    <div className="delivery_point_feedback_item__header">
                        <p className="delivery_point_feedback_item__name">Влад</p>
                        <p className="delivery_point_feedback_item__date">22/04/2023</p>
                    </div>

                    <div className="delivery_point_feedback_item__score">
                        <img className="delivery_point_feedback_item__score_ico" src={star_fill} alt="..."/>
                        <img className="delivery_point_feedback_item__score_ico" src={star_fill} alt="..."/>
                        <img className="delivery_point_feedback_item__score_ico" src={star_fill} alt="..."/>
                        <img className="delivery_point_feedback_item__score_ico" src={star_fill} alt="..."/>
                        <img className="delivery_point_feedback_item__score_ico" src={star} alt="..."/>
                    </div>

                    <p className="delivery_point_feedback_item__content">
                        Хороший пункт выдачи, накормили, напоили, встретили с хлебом и солью.
                        Я чрезвычайно рад, что в нашем городе есть подобное.
                    </p>

                </div> 

                <div className="delivery_point_feedback_item">
                    <div className="delivery_point_feedback_item__header">
                        <p className="delivery_point_feedback_item__name">Сергей</p>
                        <p className="delivery_point_feedback_item__date">28/06/2023</p>
                    </div>

                    <div className="delivery_point_feedback_item__score">
                        <img className="delivery_point_feedback_item__score_ico" src={star_fill} alt="..."/>
                        <img className="delivery_point_feedback_item__score_ico" src={star_fill} alt="..."/>
                        <img className="delivery_point_feedback_item__score_ico" src={star_fill} alt="..."/>
                        <img className="delivery_point_feedback_item__score_ico" src={star_fill} alt="..."/>
                        <img className="delivery_point_feedback_item__score_ico" src={star_fill} alt="..."/>
                    </div>

                    <p className="delivery_point_feedback_item__content">
                        Кассирша весьма и весьма груба.
                        Меня словно морально изнасиловали, когда я вёл с ней эту возмутительную беседу я мечтал только об одном:
                        скорее побежать домой, спрятаться за маминой спиной и плакать ей в колено.
                        Ставлю 5 звёзд, потому что давно никто не будил во мне столь острых чувств. Спасибо.
                    </p>

                </div> 

                <div className="delivery_point_feedback_item">
                    <div className="delivery_point_feedback_item__header">
                        <p className="delivery_point_feedback_item__name">Влад</p>
                        <p className="delivery_point_feedback_item__date">10/05/2017</p>
                    </div>

                    <div className="delivery_point_feedback_item__score">
                        <img className="delivery_point_feedback_item__score_ico" src={star_fill} alt="..."/>
                        <img className="delivery_point_feedback_item__score_ico" src={star} alt="..."/>
                        <img className="delivery_point_feedback_item__score_ico" src={star} alt="..."/>
                        <img className="delivery_point_feedback_item__score_ico" src={star} alt="..."/>
                        <img className="delivery_point_feedback_item__score_ico" src={star} alt="..."/>
                    </div>

                    <p className="delivery_point_feedback_item__content">
                        Получил по лицу
                    </p>

                </div> 
            </div> 

            <button className="delivery_point_feedback__btn">
                Показать ещё
            </button> 
        </section>
    )
}

export default Feedbacks;