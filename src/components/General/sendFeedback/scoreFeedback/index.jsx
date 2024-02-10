import React, { useState } from 'react';

import './index.scss';




const ScoreFeedback = ({ selectedScore, setSelectedScore }) => {
    const [hoverScore, setHoverScore] = useState(null)
    
    return (
        <div className="sendFeedbackScore">
            {
                [...Array(5)].map((item, index) => (
                    <div
                        key={'score' + index}
                        className={
                           (hoverScore >= index) || (selectedScore >= index) ? 
                                                    'sendFeedbackCircle sendFeedbackCircle--selected' 
                                                 :
                                                    'sendFeedbackCircle'
                        }
                        onMouseOver={() => setHoverScore(index)}
                        onMouseLeave={() => setHoverScore(null)}
                        onClick={() => setSelectedScore(index)}
                    >
                    </div>
                ))
            }
        </div>

    )
}

export default ScoreFeedback;
