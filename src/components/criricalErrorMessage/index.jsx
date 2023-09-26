import React from 'react';

import hole from './../../assets/images/error/hole.svg'

import './index.scss';





const CriticalErrorMessage = ({ message }) => {
  return (
      <div className="criticalErrorMessage">
        <div className="textWrapper">
          <div className="errorTitle">
            <img src={hole} className="letter letter1" />
            <span className="letter letter2">Ш</span>
            <span className="letter letter3">И</span>
            <span className="letter letter4">Б</span>
            <span className="letter letter5">К</span>
            <span className="letter letter6">А</span>
            <span className="letter letter5">!</span>
          </div>

          <div className="line"></div>

          <p className="causeError">{ message }</p>
        </div>

        <img src={hole} className="hole1" />
        <img src={hole} className="hole2" />
        <img src={hole} className="hole3" />
        <img src={hole} className="hole4" />
      </div>
  )
}

export default CriticalErrorMessage;
