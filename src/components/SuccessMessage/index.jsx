import React, { useEffect, useState } from 'react';

import './index.scss';



const SuccessMessage = ({ message, setIsVisibleSuccess }) => {

  return (
    <div className="successMessage">
        <span className="crossSuccess" onClick={() => setIsVisibleSuccess(false)} >×</span>
        { message }
    </div>
  )
}

export default SuccessMessage;
