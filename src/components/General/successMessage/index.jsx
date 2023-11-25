import React from 'react';

import './index.scss';



const SuccessMessage = ({ message, setIsVisibleSuccess, additionalClass='' }) => {

  return (
    <div className={'successMessage ' + additionalClass}>
        <span className="crossSuccess" onClick={() => setIsVisibleSuccess(false)} >×</span>
        { message }
    </div>
  )
}

export default SuccessMessage;
