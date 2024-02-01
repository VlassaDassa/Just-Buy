import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from "yup";

import auth from '../../../../store/authForm';
import { isEmpty } from '../../../../services/services';
import { isObjectNotEmpty } from '../../../../services/services';

import { loginUser } from '../../../../api/auth';

import AuthInput from '../authInput';
import AuthButton from '../authButton';
import AuthServerError from '../authServerError';

import { updateLocalStorage } from '../../../../services/services';




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



const Login = ({ toggleAuth }) => {
    const [loginError, setLoginError] = useState()


    const handleSubmitForm = (values, resetForm) => {
        loginUser({
            username: values.login,
            password: values.password,
        })

        .then(response => {
            if (response.status != 200) { setLoginError('Ошибка на сервере'); return }

            if (!(response.data.access && response.data.refresh)) { setLoginError('Ошибка на сервере'); return }

            // Успешная авторизация
            setLoginError(null)
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);
            updateLocalStorage() // Установка username и user_id
            

            // Очистка и закрытие
            resetForm()
            toggleAuth()
        })


        .catch(error => { setLoginError('Неизвестная ошибка'); console.error('Error: ', error) })
    }


    return (
        <div className='login'>
            <div className="auth__title">Авторизация</div>

            {
                loginError ? <AuthServerError errorText={loginError} /> : null
            }
            
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
                    resetForm,
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
                                handler={() => handleSubmitForm(values, resetForm)}

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
