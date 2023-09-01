import React from 'react';
import ProfileBar from '../../components/Profile/profileBar';
import MediumProfileBar from '../../components/Profile/mediumProfileBar';
import MobileProfileBar from '../../components/Profile/mobileProfileBar';
import ChoicePoint from '../../components/Profile/choicePoint';





const Profile = () => {
  return (
    <main className='profile'>
        <div className="container">
            <ProfileBar />
            <MediumProfileBar />
            <MobileProfileBar />
            <ChoicePoint />
        </div>
    </main>
  )
}

export default Profile;
