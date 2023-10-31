import React, { useEffect } from 'react';

import ProfileBar from '../../components/Profile/profileBar';
import MediumProfileBar from '../../components/Profile/mediumProfileBar';
import MobileProfileBar from '../../components/Profile/mobileProfileBar';
import ChoicePoint from '../../components/Profile/choicePoint';
import CurrentDeliveryPoint from '../../components/Profile/currentDeliveryPoint';
import LastPurchases from '../../components/Profile/lastPurchases';
import OnRoad from '../../components/Profile/onRoad';
import BankCards from '../../components/Profile/bankCards';



const Profile = () => {


  useEffect(() => {
    document.title = 'Профиль'
  }, [])


  return (
    <main className='profile'>
        <div className="container">
            <ProfileBar />
            <MediumProfileBar />
            <MobileProfileBar /> 
            <ChoicePoint />
            <CurrentDeliveryPoint />
            <LastPurchases />
            <OnRoad />
            <BankCards />
        </div>
    </main>
  )
}

export default Profile;
