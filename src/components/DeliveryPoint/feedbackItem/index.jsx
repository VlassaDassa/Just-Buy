import React from "react";

import { dateFormatting } from "../../../services/services";

import star_fill from "../../../assets/images/delivery_point/star_fill.svg";





function FeedbackItem({ feedback }) {
  
    return (
      <div className="delivery_point_feedback_item">

          <div className="delivery_point_feedback_item__header">
              <p className="delivery_point_feedback_item__name">{feedback.username}</p>
              <p className="delivery_point_feedback_item__date">{dateFormatting(feedback.date)}</p>
          </div>

          <div className="delivery_point_feedback_item__score">
              <img className="delivery_point_feedback_item__score_ico" src={star_fill} />
              {feedback.rating}
          </div>

          <p className="delivery_point_feedback_item__content">{feedback.content}</p>
      </div>
    );
}

export default FeedbackItem;