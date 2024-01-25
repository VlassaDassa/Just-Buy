import React from 'react';

import errorIcon from './../../../../assets/images/error/accent_warning_ico.svg'

import './index.scss'





const AuthError = ({ errorText=null }) => {
    return (
        <>
            <img src={errorIcon} className="auth_wrapper__error-icon" />
            
            <div className="auth_wrapper__error">
                <p className="auth_wrapper__error-text">{errorText}</p> 
            </div>
        </>
    )
}

export default AuthError;
