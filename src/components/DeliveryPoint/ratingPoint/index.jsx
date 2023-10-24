import React from 'react';

import star_fill from "../../../assets/images/delivery_point/star_fill.svg";

import "./index.scss";





const RatingPoint = ({ rating, countFeedbacks }) => {


    return (
        <div className="delivery_point_feedback__header">
            <p className="delivery_point_feedback__numerical_rating">
                { rating }
            </p>
            
            <div className="delivery_point_feedback__rating">
            <img className="delivery_point_feedback__rating_ico" src={star_fill} />
            </div>

            <p className="delivery_point_feedback__count">{countFeedbacks} отзывов</p>
        </div>
    )
}

export default RatingPoint;