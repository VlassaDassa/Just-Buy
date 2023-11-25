import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import CloseBtn from '../closeBtn';
import ScoreFeedback from './scoreFeedback';

import sendFeedback from '../../../store/sendFeedback';
import overlay from '../../../store/overlay';
import { username } from '../../../fakeVar';
import { showError } from '../../../hooks/showError';
import { addComment } from '../../../api/cartAPI';

import './index.scss';





const SendFeedback = observer(({ objectId, isVisibleSuccess, setIsVisibleSuccess }) => {
    const [selectedScore, setSelectedScore] = useState(0)
    const [content, setContent] = useState('')
    

    const closeSendFeedback = () => {
        overlay.toggleShow(false)
        sendFeedback.toggleShow(false)
    }


    const sendToServer = () => {
        const data = {
            'username': username,
            'rating': selectedScore + 1,
            'content': content,
            'deliveryPointId': objectId,
        }

        if (content.length < 100) { showError('Недостаточно символов'); return }

        addComment(data)
            .then(response => {
                if (response.status !== 200) { showError('Ошибка при добавлении отзыва'); closeSendFeedback(); return }
                setIsVisibleSuccess(true)

                setTimeout(() => {
                    closeSendFeedback();
                }, 3000)
            })
            
            .catch(error => {
                showError('Ошибка при добавлении отзыва')
                closeSendFeedback();
                console.error(error)
            })
    }


    return (
            <div className='sendFeedback'>
                <CloseBtn handler={closeSendFeedback} />

                <ScoreFeedback selectedScore={selectedScore} setSelectedScore={setSelectedScore}  />

                <textarea 
                    className="sendFeedbackInput" 
                    name="feedback" 
                    cols="30" 
                    rows="10"
                    value={content}
                    onChange={() => setContent(event.target.value)}
                >

                </textarea>
                <button onClick={sendToServer} disabled={isVisibleSuccess} className="sendFeedbackButton"></button>
            </div>
    )
})



export default SendFeedback;
