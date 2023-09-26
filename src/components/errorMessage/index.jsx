import React from 'react';
import { observer } from 'mobx-react-lite';

import error from '../../store/error';

import './index.scss';



const ErrorMessage = observer(({showTime = 5000}) => {

  if (error.show) {
    setTimeout(() => {
        error.toggleShow(false)
    }, showTime)
  }

  return (
    <div className={error.show ? 'errorMessage errorMessage--show' : 'errorMessage'}>
        <span className="crossError" onClick={() => {error.toggleShow(false)}} >×</span>
        { error.errorMessage }
    </div>
  )
})

export default ErrorMessage;
