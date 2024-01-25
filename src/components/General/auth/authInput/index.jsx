import React from 'react';

import AuthError from '../authError';

import './index.scss';




const AuthInput = ({ errors, touched, ...inputProps }) => {
   
    
    const errorConditionShow = errors[inputProps.id] && touched[inputProps.id]

    return (
        <div className="auth_wrapper">
            <label htmlFor={inputProps.id} className="auth_wrapper__label">{inputProps.label}</label>
            <input {...inputProps} />

            
            { errorConditionShow ? <AuthError errorText={errors[inputProps.id]} /> : null }
        </div>
    )
}

export default AuthInput;
