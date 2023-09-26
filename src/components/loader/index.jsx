import React from 'react';
import './index.scss';





const Loader = ({ loaderClass="loader", additionalClass="" }) => {
  return (
    <div className={loaderClass + ' ' + additionalClass}></div>
  )
}

export default Loader;
