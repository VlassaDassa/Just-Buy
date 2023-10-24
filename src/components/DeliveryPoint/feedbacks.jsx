import React, { useState } from 'react';

import RatingPoint from "./ratingPoint";
import FeedbackItem from './feedbackItem';








function FeedbackList({ feedbacks, rating }) {
    const [range, setRange] = useState({'start': 0, 'end': 3})


    return (
      <div>
        <RatingPoint rating={rating} countFeedbacks={feedbacks?.length} />

        <div className="delivery_point_feedback__items">
            {

              feedbacks?.slice(range.start, range.end)?.map((feedback) => (
                <FeedbackItem key={feedback.id} feedback={feedback} />
              ))

            }
            
        </div>


        <button className="delivery_point_feedback__btn">
            Показать больше
        </button>

      </div>
    );
}

export default FeedbackList;


{/* <button className="delivery_point_feedback__btn" onClick={showMore} disabled>
            Больше отзывов нет
</button> */}