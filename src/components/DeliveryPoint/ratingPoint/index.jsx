import React from 'react';
import "./index.scss";
import star from "../../../assets/images/delivery_point/star.svg";
import star_fill from "../../../assets/images/delivery_point/star_fill.svg";

const RatingPoint = ({ averageRating, totalReviews }) => {

    const stars = [...Array(5)].map((_, i) => (
        <img
            key={i}
            className="delivery_point_feedback__rating_ico"
            src={i < averageRating ? star_fill : star}
            alt={`Звезда ${i + 1}`}
        />
    ));

    return (
        <div className="delivery_point_feedback__header">
            <p className="delivery_point_feedback__numerical_rating">
                {averageRating.toFixed(1)} 
            </p>
            
            <div className="delivery_point_feedback__rating">
                {stars}
            </div>
            <p className="delivery_point_feedback__count">{totalReviews} отзывов</p>
        </div>
    )
}

export default RatingPoint;