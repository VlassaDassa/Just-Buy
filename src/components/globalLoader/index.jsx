import React from 'react';
import './index.scss';




const GlobalLoader = ({ hiddenGlobalLoader }) => {


  
  return (
    <div className={hiddenGlobalLoader ? 'globalLoader__wrapper globalLoader__wrapper--hidden' : 'globalLoader__wrapper'}>
        <div className="globalLoader"></div>
    </div>
    
  )
}

export default GlobalLoader
