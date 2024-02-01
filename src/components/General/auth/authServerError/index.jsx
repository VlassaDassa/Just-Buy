import React from 'react';

import './index.scss'


// Как authError, только здесь хранятся ошибки, получаемые с сервера

const AuthServerError = ({ errorText=null }) => {
    return (
        <>
            <div className="auth_wrapper__error auth_wrapper__error--server">
                <p className="auth_wrapper__error-text">{errorText}</p> 
            </div>
        </>
    )
}

export default AuthServerError;
