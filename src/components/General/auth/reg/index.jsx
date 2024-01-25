import React from 'react';
import { Formik } from 'formik';
import * as yup from "yup";

import auth from '../../../../store/auth';
import { isEmpty } from '../../../../services/services';
import { isObjectNotEmpty } from '../../../../services/services';

import AuthInput from '../authInput';
import AuthPhoneInput from '../authPhoneInput';
import AuthButton from '../authButton';



// Поля формы
const listRegInputs = [
    {
        type: 'text',
        id: 'login_reg',
        className: 'auth_wrapper__input',
        placeholder: 'Введите ваш логин', 
        label: 'Логин'
    },

    {
        type: "password", 
        id: "password_reg", 
        className: "auth_wrapper__input", 
        placeholder: "Введите ваш пароль", 
        label: "Пароль",
    },

    {
        type: "password", 
        id: "confirm_password", 
        className: "auth_wrapper__input", 
        placeholder: "Подтвердите пароль", 
        label: "Подтверждение пароля"
    },


]

// Схема валидации полей формы
const validationSchema = yup.object().shape({
    login_reg: yup.string().required("Обязательное поле").min(5, 'Не менее 5 символов'),
    password_reg: yup.string().required("Обязательное поле").min(10, 'Не менее 10 символов'),
    confirm_password: yup
        .string()
        .required("Обязательное поле")
        .oneOf([yup.ref('password_reg'), null], 'Пароли должны совпадать'),
    phoneNumber: yup.string().required("Обязательное поле").min(16, 'Неверный номер'),
});



const Reg = () => {
    
    const handleSubmitForm = (values) => {
        console.log('[Form data]: ', values)
    }

    return (
        <div className='reg'>
            <div className="auth__title">Регистрация</div>

            <Formik
                initialValues={{
                    login_reg: '',
                    password_reg: '',
                    confirm_password: '',
                    phoneNumber: '',
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

                        <AuthPhoneInput
                            type={'text'}
                            id={'phone_number'}
                            className={'auth_wrapper__input'}
                            placeholder={"+7 000 000-00-00"}
                            name={"phoneNumber"}

                            onChange={(e) => handleChange(e)}
                            onBlur={handleBlur}
                            value={values.phoneNumber}

                            errors={errors}
                            touched={touched}
                        />

                        
                        <div className="auth_buttons">
                            <AuthButton 
                                buttonText={'Войти'}
                                className={'auth_buttons__button auth_buttons__login_button'}
                                handler={() => auth.setRegHidden()}
                            />

                            <AuthButton 
                                buttonText={'Регистрация'}
                                className={'auth_buttons__button auth_buttons__reg_button'}
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

export default Reg;
