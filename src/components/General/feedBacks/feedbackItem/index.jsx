import React from "react";

import './index.scss';






function FeedbackItem({ feedback }) {
  
    return (
        <div className="delivery_point_feedback_item">
            <span className="feedbackItemCircle"></span>

            <div className="delivery_point_feedback_item__header">
                <div className="feedbackScoreHeader">
                    <p className="delivery_point_feedback_item__score">{ feedback.rating }</p>
                    <div className="feedbackScoreCircle"></div>
                </div>
                <p className="delivery_point_feedback_item__name">{ feedback.username }</p>
            </div>

            <p className="delivery_point_feedback_item__content">{feedback.content}</p>

        </div>
    );
}

export default FeedbackItem;