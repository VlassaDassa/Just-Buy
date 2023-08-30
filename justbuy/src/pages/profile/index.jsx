import React from 'react';
import ProfileBar from '../../components/Profile/profileBar';
import MediumProfileBar from '../../components/Profile/mediumProfileBar';
import MobileProfileBar from '../../components/Profile/mobileProfileBar';



const Profile = () => {
  return (
    <main className='profile'>
        <div className="container">
            <ProfileBar />
            <MediumProfileBar />
            <MobileProfileBar />
        </div>
    </main>
  )
}

export default Profile;
