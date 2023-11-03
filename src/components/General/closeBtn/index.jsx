import React from 'react';

import './index.scss';



const CloseBtn = ({ additionalClass="", handler=null }) => {
    return (
        <div className={'closeBtn' + ' ' + additionalClass} onClick={handler}>
            &times;
        </div>
    );
}

export default CloseBtn;
