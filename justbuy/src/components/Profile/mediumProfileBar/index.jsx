import React from 'react';
import './index.scss';

import like from './../../../assets/images/profile/like.svg';
import location from './../../../assets/images/profile/location.svg';
import notification from './../../../assets/images/profile/notification.svg';






const MediumProfileBar = () => {
  return (
    <section className="medium_profile_bar">
            <div className="profile_bar__wrapper_1">
                <p className="profile_bar__user_name">Владислав Садовников</p>
                <div className="profile_bar__icon_wrapper">
                    <a href="notifications.html" className="icon"><img src={notification} className="profile_bar__notification" /><div className="profile_bar__notification-active"></div></a> 
                    <a href="like_prod.html"><img src={like} className="icon profile_bar__likes" /></a>
                </div>
            </div>
            
            <div className="profile_bar__wrapper_2">
                <p className="profile_bar__become_seller">
                    <a href="edit_seller_profile.html">стать продавцом</a>
                </p>
        
                <div className="profile_bar__location_wrapper">
                    <img src={location} className="icon profile_bar__location_img" />
                    <p className="profile_bar__city">Конаково</p>
                </div>
            </div>
        </section>
  )
}

export default MediumProfileBar;
