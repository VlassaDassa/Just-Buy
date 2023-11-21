import React from 'react';

import './index.scss';




const Button = ({ additionalClass="", text='', handler=null, disabled=false}) => {
    return (
        <button
            className={
                disabled ?
                    'button ' + additionalClass + ' disabled'
                :
                    'button ' + additionalClass
            }
            onClick={handler} 
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default Button;
