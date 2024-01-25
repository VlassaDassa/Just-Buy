import React from 'react';
import { Formik } from 'formik';
import * as yup from "yup";

import auth from '../../../../store/auth';
import { isEmpty } from '../../../../services/services';
import { isObjectNotEmpty } from '../../../../services/services';

import AuthInput from '../authInput';
import AuthButton from '../authButton';




const listRegInputs = [
    {
        type: "text", 
        id: "login", 
        className: "auth_wrapper__input", 
        placeholder: "Введите ваш логин", 
        label: "Логин"
    },

    {
        type: "password", 
        id: "password", 
        className: "auth_wrapper__input", 
        placeholder: "Введите ваш пароль", 
        label: "Пароль"
    }
]

// Схема валидации полей формы
const validationSchema = yup.object().shape({
    login: yup.string().required("Обязательное поле").min(5, 'Не менее 5 символов'),
    password: yup.string().required("Обязательное поле").min(10, 'Не менее 10 символов')
});



const Login = () => {

    const handleSubmitForm = (values) => {
        console.log('[Form data]: ', values)
    }


    return (
        <div className='login'>
            <div className="auth__title">Авторизация</div>
            
            <Formik
                initialValues={{
                    login: '',
                    password: '',
                }}

                validationSchema={validationSchema}
            >

                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                }) => (
                    <>
                        {                    
                            // Вывод полей 
                            listRegInputs.map((item) => (
                                <AuthInput
                                    key={item.id}

                                    type={item.type} 
                                    id={item.id} 
                                    className={item.className} 
                                    placeholder={item.placeholder} 
                                    label={item.label}
                                    name={item.id}

                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values[item.id]}

                                    errors={errors}
                                    touched={touched}
                                />
                            ))
                        }


                        <div className="auth_buttons">
                            <AuthButton 
                                buttonText={'Регистрация'}
                                className={'auth_buttons__button auth_buttons__reg_button'}
                                handler={() => auth.setRegShow()}
                            />

                            <AuthButton 
                                buttonText={'Войти'}
                                className={'auth_buttons__button auth_buttons__login_button'}
                                handler={() => handleSubmitForm(values)}

                                disabled={!isEmpty(errors) || !isObjectNotEmpty(values)}
                            />
                        </div>

                    </>
                )}
            </Formik>


        </div>
    )
}

export default Login
