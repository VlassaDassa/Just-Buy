import React, { useState } from 'react';

import RatingPoint from "./ratingPoint";
import FeedbackItem from './feedbackItem';








function FeedbackList({ feedbacks, rating }) {
    const range = 3
    const [end, setEnd] = useState(range)

    function showMore() {
      setEnd(end+range)
    }

    return (
      <div className='feedbacks'>
        <RatingPoint rating={rating} countFeedbacks={feedbacks?.length} />

        <div className="delivery_point_feedback__items">
            {
              feedbacks?.slice(0, end)?.map((feedback) => (
                <FeedbackItem key={feedback.id} feedback={feedback} />
              ))
            }
            
        </div>

        {feedbacks?.length > end ?
            <button className="delivery_point_feedback__btn" onClick={showMore}>
                Показать больше
            </button>
        :
            null
        }

      </div>
    );
}

export default FeedbackList;


