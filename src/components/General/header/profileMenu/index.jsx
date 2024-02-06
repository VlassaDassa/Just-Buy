import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import { logoutUser } from '../../../../api/auth';
import { showError } from '../../../../hooks/showError';
import { updateTokens } from '../../../../services/services';

import logout from './../../../../assets/images/header/logout.svg';
import profile from './../../../../assets/images/header/profile.svg';

import './index.scss';




export const ProfileMenu = forwardRef((props, ref) => {

    const handleLogOut = () => {
        logoutUser(localStorage.getItem('refreshToken'))
        .then(response => {
            if (response.status != 200) {
                showError('Неизвестная ошибка')
            }

            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user_id');
            localStorage.removeItem('username');

            window.location.href = "/"
        })
        .catch(error => {
            // Обновление refresh Token при истечении годности AccessToken
            if (error.response.status == 401) updateTokens()

            console.error('Error: ', error)
            showError('Неизвестная ошибка')
        })
    }


    return (
        <li className="profileMenu" ref={ref}>
            <Link onClick={() => props.setShowProfileMenu(false)} className='profileMenu-item' to="/profile"><img src={profile} />Профиль</Link>
            <div className="profileMenu-item" onClick={handleLogOut} ><img src={logout} /> Выйти</div>
        </li>
    )
})
