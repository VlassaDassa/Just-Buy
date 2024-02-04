import React, { useEffect, useState } from 'react';

import { getUserInfo } from '../../../api/profileAPI';

import { showError } from '../../../hooks/showError';

import like from './../../../assets/images/profile/like.svg';
import location from './../../../assets/images/profile/location.svg';
import notification from './../../../assets/images/profile/notification.svg';

import './index.scss';




const ProfileBar = () => {
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
        <section className="profile_bar">
                <div className="profile_bar__wrapper_1">
                    <p className="profile_bar__user_name">{userData.username}</p>
                    <a className="icon"><img src={notification} className="profile_bar__notification" /><div className="profile_bar__notification-active"></div></a> 
                    <img src={like} className="icon profile_bar__likes"/>
                </div>
                
                <div className="profile_bar__wrapper_2">
                    <p className="profile_bar__become_seller">
                        {
                            userData.is_seller ? 'страница продавца' : 'стать продавцом'
                        }
                    </p>
            
                    <div className="profile_bar__location_wrapper">
                        <img src={location} className="icon profile_bar__location_img"/>
                        <p className="profile_bar__city">{userData.city}</p>
                    </div>
                </div>
            </section>
    )
    }

export default ProfileBar;
