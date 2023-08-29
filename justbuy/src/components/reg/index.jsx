import React from 'react';
import { observer } from 'mobx-react-lite';

import auth from '../../store/auth';





const Reg = observer(() => {


  return (
    <div className={`reg ${!auth.regShow && 'reg--hidden'}`}>
        <div className="auth__title">Регистрация</div>

        <div className="auth_wrapper">
            <label htmlFor="login_reg" className="auth_wrapper__label">Логин</label>
            <input type="text" id="login_reg" className="auth_wrapper__input" placeholder="Введите ваш логин" />
            <img src="icons/dest/general/accent_warning_ico.svg" className="auth_wrapper__error-icon auth_wrapper__error-icon--hidden" />

            <div className="auth_wrapper__error auth_wrapper__error--hidden">
                <p className="auth_wrapper__error-text">Неверный логин</p> 
            </div>
        </div>

        <div className="auth_wrapper">
            <label htmlFor="password_reg" className="auth_wrapper__label">Пароль</label>
            <input type="password" id="password_reg" className="auth_wrapper__input" placeholder="Введите ваш пароль" />
            <img src="icons/dest/general/accent_warning_ico.svg" className="auth_wrapper__error-icon auth_wrapper__error-icon--hidden" />

            <div className="auth_wrapper__error auth_wrapper__error--hidden">
                <p className="auth_wrapper__error-text">Неверный пароль</p> 
            </div>
        </div>

        <div className="auth_wrapper">
            <label htmlFor="confirm_password" className="auth_wrapper__label">Подтверждение пароля</label>
            <input type="password" id="confirm_password" className="auth_wrapper__input" placeholder="Подтвердите пароль" />
            <img src="icons/dest/general/accent_warning_ico.svg" className="auth_wrapper__error-icon auth_wrapper__error-icon--hidden" />

            <div className="auth_wrapper__error auth_wrapper__error--hidden">
                <p className="auth_wrapper__error-text">Пароли несовпадают</p> 
            </div>
        </div>

        <div className="auth_wrapper">
            <label htmlFor="phone_number" className="auth_wrapper__label">Номер телефона</label>

            <div className="country_code">
                <div className="country_code__background">
                    <div className="country_code__img_wrapper">
                        <img src="icons/dest/general/usa_flag.svg" className="country_code__img" id="usa_flag" />
                    </div>
                </div>

                <input type="text" id="phone_number" className="auth_wrapper__input" placeholder="+7 000 000-00-00" />

            </div>

            <img src="icons/dest/general/accent_warning_ico.svg" className="auth_wrapper__error-icon auth_wrapper__error-icon--hidden" />

            <div className="auth_wrapper__error auth_wrapper__error--hidden">
                <p className="auth_wrapper__error-text">Неверный логин</p> 
            </div>
        </div>

        <div className="auth_buttons">
            <button 
                className="auth_buttons__button auth_buttons__login_button"
                onClick={() => auth.setRegHidden()}
            >
                Войти
            </button>
            <button className="auth_buttons__button auth_buttons__reg_button">Регистрация</button>
        </div>

    </div>
  )
})

export default Reg;
