import React, { useEffect, useState } from 'react';

import { getUserInfo } from '../../../api/profileAPI';

import { showError } from '../../../hooks/showError';

import like from './../../../assets/images/profile/like.svg';
import location from './../../../assets/images/profile/location.svg';
import notification from './../../../assets/images/profile/notification.svg';

import './index.scss';





const MediumProfileBar = () => {

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
        <section className="medium_profile_bar">
                <div className="profile_bar__wrapper_1">
                    <p className="profile_bar__user_name">{userData.username}</p>
                    <div className="profile_bar__icon_wrapper">
                        <a href="notifications.html" className="icon"><img src={notification} className="profile_bar__notification" /><div className="profile_bar__notification-active"></div></a> 
                        <a href="like_prod.html"><img src={like} className="icon profile_bar__likes" /></a>
                    </div>
                </div>
                
                <div className="profile_bar__wrapper_2">
                    <p className="profile_bar__become_seller">
                        <a href="edit_seller_profile.html">
                        {
                            userData.is_seller ? 'страница продавца' : 'стать продавцом'
                        }
                        </a>
                    </p>
            
                    <div className="profile_bar__location_wrapper">
                        <img src={location} className="icon profile_bar__location_img" />
                        <p className="profile_bar__city">{userData.city}</p>
                    </div>
                </div>
            </section>
    )
}

export default MediumProfileBar;
