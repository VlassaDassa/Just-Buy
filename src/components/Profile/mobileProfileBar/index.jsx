import React, { useEffect, useState } from 'react'

import { getUserInfo } from '../../../api/profileAPI';

import { showError } from '../../../hooks/showError';

import like from './../../../assets/images/profile/like.svg';
import notification from './../../../assets/images/profile/notification.svg';

import './index.scss';




const MobileProfileBar = () => {
    const [userData, setUserData] = useState({})

    useEffect(() => {

        getUserInfo(localStorage.getItem('user_id'))
        .then(response => {
            if (response.status != 200) return;
            setUserData(response.data)
        })
        .catch(error => {
            console.error(error)
            showError('Серверная ошибка')
        })

    }, [])


    return (
        <section className="mobile_profile_bar">
                <div className="profile_bar__wrapper_1">
                    <p className="profile_bar__user_name">{userData.username}</p>
                </div>

                <div className="mobile_profile_bar__icon_wrapper">
                    <a href="notifications.html" className="mobile_profile_bar__wrapper">
                        <div className="icon"><img src={notification} className="profile_bar__notification" /><div className="profile_bar__notification-active"></div></div>
                    </a>

                    <a href="like_prod.html" className="mobile_profile_bar__wrapper">
                        <img src={like} className="icon profile_bar__likes" />
                    </a>

                    <div className="mobile_profile_bar__wrapper">
                        <p className="profile_bar__city">{userData.city}</p>
                    </div>
                </div>
                
                
                <a href="edit_seller_profile.html" className="mobile_profile_bar__wrapper">
                    <p className="profile_bar__become_seller">
                        {
                            userData.is_seller ? 'страница продавца' : 'стать продавцом'
                        }
                    </p>
                </a>
            </section>
    )
}

export default MobileProfileBar;
