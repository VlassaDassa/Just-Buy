import React from 'react';

import './index.scss';



const Title = ({title, className='title', additionalClass=""}) => {
  return (
    <h1 className={className + ' ' + additionalClass}>{title}</h1>
  )
}

export default Title



