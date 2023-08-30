import React from 'react'
import './index.scss';

import like from './../../../assets/images/profile/like.svg';
import notification from './../../../assets/images/profile/notification.svg';





const MobileProfileBar = () => {
  return (
    <section className="mobile_profile_bar">
            <div className="profile_bar__wrapper_1">
                <p className="profile_bar__user_name">Владислав Садовников</p>
            </div>

            <div className="mobile_profile_bar__icon_wrapper">
                <a href="notifications.html" className="mobile_profile_bar__wrapper">
                    <div className="icon"><img src={notification} className="profile_bar__notification" /><div className="profile_bar__notification-active"></div></div>
                </a>

                <a href="like_prod.html" className="mobile_profile_bar__wrapper">
                    <img src={like} className="icon profile_bar__likes" />
                </a>

                <div className="mobile_profile_bar__wrapper">
                    <p className="profile_bar__city">Конаково</p>
                </div>
            </div>
            
            
            <a href="edit_seller_profile.html" className="mobile_profile_bar__wrapper">
                <p className="profile_bar__become_seller">
                    Стать продавцом
                </p>
            </a>
        </section>
  )
}

export default MobileProfileBar;
