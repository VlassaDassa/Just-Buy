import React from 'react';

import { getNoun } from '../../../../services/services';

import "./index.scss";





const RatingPoint = ({ rating, countFeedbacks }) => {
    return (
        <div className="delivery_point_feedback__header">

            <div className="ratingWrapper">
                <p className="ratingWrapperText">{ rating }</p>
                <span className="ratingCircle" />
            </div>

            <div className="countFeedbacksWrapper">
                {countFeedbacks + ' ' + getNoun(parseInt(countFeedbacks), 'отзыв', 'отзыва', 'отзывов')}
            </div>

        </div>
    )
}

export default RatingPoint;