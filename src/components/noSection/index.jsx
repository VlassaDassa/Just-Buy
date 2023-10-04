import React from 'react';
import './index.scss';



const NoSection = ({ message, additionalClass={} }) => {
  return (
    <p className={'noSection' + ' ' + additionalClass}>
        {message}
    </p>
  )
}

export default NoSection;


