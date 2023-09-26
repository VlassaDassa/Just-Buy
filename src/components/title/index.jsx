import React from 'react';
import './index.scss';



const Title = ({title, className='title'}) => {
  return (
    <h1 className={className}>{title}</h1>
  )
}

export default Title



