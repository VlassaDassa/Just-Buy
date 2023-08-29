import React from 'react';
import './index.scss';
import like from './../../../assets/images/profile/like.svg';
import location from './../../../assets/images/profile/location.svg';
import notification from './../../../assets/images/profile/notification.svg';




const ProfileBar = () => {
  return (
    <section className="profile_bar">
            <div className="profile_bar__wrapper_1">
                <p className="profile_bar__user_name">Владислав Садовников</p>
                <a className="icon"><img src={notification} className="profile_bar__notification" /><div className="profile_bar__notification-active"></div></a> 
                <img src={like} className="icon profile_bar__likes"/>
            </div>
            
            <div className="profile_bar__wrapper_2">
                <p className="profile_bar__become_seller">
                    стать продавцом
                </p>
        
                <div className="profile_bar__location_wrapper">
                    <img src={location} className="icon profile_bar__location_img"/>
                    <p className="profile_bar__city">Конаково</p>
                </div>
            </div>
        </section>
  )
}

export default ProfileBar;
