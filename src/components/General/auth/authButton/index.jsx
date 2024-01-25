import React from 'react';

import './index.scss';




const AuthButton = ({buttonText, className, handler=null, disabled=false}) => {


    
    return (
        <button 
            className={disabled ? className + ' auth_buttons__button--disabled' : className}
            onClick={handler}

            disabled={disabled}
        >
            {buttonText}
        </button>
    )
}

export default AuthButton;
