import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { getNoun } from '../../../../services/services';
import Button from './../../button';
import { authVar } from '../../../../fakeVar';

import overlay from '../../../../store/overlay';
import critical_error from '../../../../store/critical_error';
import sendFeedback from '../../../../store/sendFeedback';
import { getUserCommentExistPoint } from '../../../../api/deliveryPointAPI';

import "./index.scss";





const RatingPoint = observer(({ rating, countFeedbacks }) => {
    const [hiddenSendCommentBtn, setHiddenSendCommentBtn] = useState(true)
    const { deliveryPointId } = useParams()
    

    useEffect(() => {
        const userId = localStorage.getItem('user_id')
        if (!userId) { setHiddenSendCommentBtn(true); return }

        getUserCommentExistPoint(userId, deliveryPointId)
        .then(response => {
            if (response.status != 200) { critical_error.toggleShow(true); return } 

            setHiddenSendCommentBtn(response.data.exists)
        })

        .catch(error => { console.error(error); critical_error.toggleShow(true); setHiddenSendCommentBtn(true) })

    }, [])
    

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
                !hiddenSendCommentBtn ?
                    <Button text={'Написать отзыв'} handler={openSendFeedback} />
                :
                    null
            }
            

        </div>
    )
})

export default RatingPoint;