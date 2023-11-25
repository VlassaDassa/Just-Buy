import React from 'react';
import { observer } from 'mobx-react-lite';

import { getNoun } from '../../../../services/services';
import Button from './../../button';
import { authVar } from '../../../../fakeVar';

import overlay from '../../../../store/overlay';
import sendFeedback from '../../../../store/sendFeedback';

import "./index.scss";





const RatingPoint = observer(({ rating, countFeedbacks }) => {

    
    const openSendFeedback = () => {
        overlay.toggleShow(true)
        sendFeedback.toggleShow(true)
    }


    return (
        <div className="delivery_point_feedback__header">

            <div className="ratingContainer">
                <div className="ratingWrapper">
                    <p className="ratingWrapperText">{ rating }</p>
                    <span className="ratingCircle" />
                </div>

                <div className="countFeedbacksWrapper">
                    {countFeedbacks + ' ' + getNoun(parseInt(countFeedbacks), 'отзыв', 'отзыва', 'отзывов')}
                </div>
            </div>
            

            {
                authVar ?
                    <Button text={'Написать отзыв'} handler={openSendFeedback} />
                :
                    null
            }
            

        </div>
    )
})

export default RatingPoint;