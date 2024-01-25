import React, { useState } from 'react';

import AuthError from '../authError';
    import InputMask from 'react-input-mask';

import questionIco from './../../../../assets/images/auth/question.svg';
import kzIco from './../../../../assets/images/auth/kz_flag.png';
import russiaIco from './../../../../assets/images/auth/russian_flag.png';
import usaIco from './../../../../assets/images/auth/usa_flag.svg';

import './index.scss';





const AuthPhoneInput = ({ errors, touched, onChange, ...inputProps }) => {
    const [countryIco, setCountryIco] = useState(questionIco)

    const errorConditionShow = errors.phoneNumber && touched.phoneNumber

    const customHandleInput = (e) => {
        const value = e.target.value

        defineCountryCode(value)
        onChange(e) // Функция от Formik
    }


    const defineCountryCode = (value) => {
        
        if (value.startsWith('+1')) {
            setCountryIco(usaIco)
        }

        else if (value.startsWith('+7')) {
            setCountryIco(russiaIco)
        }

        else if (value.startsWith('+9')) {
            setCountryIco(kzIco)
        }

        else {
            setCountryIco(questionIco)
        }
    }

    return (
        <div className="auth_wrapper">
            <label htmlFor="phone_number" className="auth_wrapper__label">Номер телефона</label>

            <div className="country_code">
                <div className="country_code__background">
                    <div className="country_code__img_wrapper">
                        <img src={countryIco} className="country_code__img" />
                    </div>
                </div>

                <InputMask 
                    mask="+9 999 999-99-99"
                    maskChar=""

                    onChange={customHandleInput}

                    {...inputProps} 
                />

            </div>
            
            {errorConditionShow ? <AuthError errorText={errors.phoneNumber} /> : null}

            
        </div>
    )
}

export default AuthPhoneInput;
