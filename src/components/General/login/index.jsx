import React from 'react';
import { observer } from 'mobx-react-lite';

import auth from '../../../store/auth';




const Login = observer(() => {



  return (
    <div className={`login ${auth.regShow && 'login--hidden'}`}>
        <div className="auth__title">Авторизация</div>

        <div className="auth_wrapper">
            <label htmlFor="login" className="auth_wrapper__label">Логин</label>
            <input type="text" id="login" className="auth_wrapper__input" placeholder="Введите ваш логин" />
            <img src="icons/dest/general/accent_warning_ico.svg" className="auth_wrapper__error-icon auth_wrapper__error-icon--hidden" />

            <div className="auth_wrapper__error auth_wrapper__error--hidden">
                <p className="auth_wrapper__error-text">Неверный логин</p> 
            </div>
        </div>

        <div className="auth_wrapper">
            <label htmlFor="password" className="auth_wrapper__label">Пароль</label>
            <input type="password" id="password" className="auth_wrapper__input" placeholder="Введите ваш пароль" />
            <img src="icons/dest/general/accent_warning_ico.svg" className="auth_wrapper__error-icon auth_wrapper__error-icon--hidden" />
            

            <div className="auth_wrapper__error auth_wrapper__error--hidden">
                <p className="auth_wrapper__error-text">Неверный пароль</p> 
            </div>
        </div>

        <div className="auth_buttons">
            <button 
                className="auth_buttons__button auth_buttons__reg_button"
                onClick={() => auth.setRegShow()}
            >
                Регистрация
            </button>
            <button className="auth_buttons__button auth_buttons__login_button">Войти</button>
        </div>

    </div>
  )
})

export default Login
