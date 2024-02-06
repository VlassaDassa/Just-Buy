import React from 'react';

import telegramIco from './../../../../assets/images/auth/telegram.svg'

import './index.scss';




const AuthButton = ({buttonText, className, handler=null, disabled=false, telegram=false}) => {


    
    return (
        <button 
            className={disabled ? className + ' auth_buttons__button--disabled' : className}
            onClick={handler}

            disabled={disabled}
        >
            {buttonText}

            {
                telegram ? <img src={telegramIco} className="authIco" /> : null
            }
        </button>
    )
}

export default AuthButton;
