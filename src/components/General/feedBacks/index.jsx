import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { observer } from 'mobx-react-lite';

import RatingPoint from "./ratingPoint";
import FeedbackItem from './feedbackItem';
import SendFeedback from "../../General/sendFeedback";
import SuccessMessage from '../successMessage';
import NoSection from '../noSection';

import sendFeedback from '../../../store/sendFeedback';

import './index.scss';






const Feedbacks = observer(({ feedbacks, rating, objectId }) => {
    const range = 3
    const [end, setEnd] = useState(range)

    const [isVisibleSuccess, setIsVisibleSuccess] = useState(false)


    function showMore() {
      setEnd(end+range)
    }

    return (
      <section className='feedbacks'>

        <CSSTransition
          in={isVisibleSuccess}
          key={'transSuccessMessage'}
          timeout={4000}
          classNames="success"
        >
          <SuccessMessage message={'Отзыв добавлен!'} setIsVisibleSuccess={setIsVisibleSuccess} />
        </CSSTransition>

        <CSSTransition
            in={sendFeedback.show}
            key={'sendFeedbackTransition'}
            unmountOnExit
            timeout={300}
            classNames="sendFeedbackTransition"
        > 
            <SendFeedback objectId={objectId} isVisibleSuccess={isVisibleSuccess} setIsVisibleSuccess={setIsVisibleSuccess} />
        </CSSTransition>


        <RatingPoint rating={rating} countFeedbacks={feedbacks?.length} isVisibleSuccess={isVisibleSuccess} />

        <div className="delivery_point_feedback__items">
            {feedbacks?.length <= 0 ?
                <NoSection message={'Комментариев нет'} additionalClass={'noSection--feedbacks'} />
              :
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

      </section>
    );
})

export default Feedbacks;


