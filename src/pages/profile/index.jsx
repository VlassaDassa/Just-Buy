import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { CSSTransition } from 'react-transition-group';

import ProfileBar from '../../components/Profile/profileBar';
import MediumProfileBar from '../../components/Profile/mediumProfileBar';
import MobileProfileBar from '../../components/Profile/mobileProfileBar';
import ChoicePoint from '../../components/Profile/choicePoint';
import CurrentDeliveryPoint from '../../components/Profile/currentDeliveryPoint';
import LastPurchases from '../../components/Profile/lastPurchases';
import OnRoad from '../../components/Profile/onRoad';
import BankCards from '../../components/Profile/bankCards';
import { ChoiceCity } from '../../components/Profile/choiceCity';

import { getCurrentDeliveryPoint } from '../../api/deliveryPointAPI';
import choiceCity from '../../store/choiceCity';
import useRequest from '../../hooks/useRequest';
import { defaultCoordinates } from '../../fakeVar';

import './index.scss';



const Profile = observer(() => {
    const [data, loading, error] = useRequest(() => getCurrentDeliveryPoint(localStorage.getItem('user_id'))) 
    const [point, setPoint] = useState({})

    useEffect(() => {
        if (data && !loading) {
            setPoint(data)
        }
    }, [data])

    
    useEffect(() => {
        document.title = 'Профиль'
    }, [])


    return (
      <main className='profile'>
          <div className="container">

              <CSSTransition
                  in={choiceCity.show}
                  key={'choiceCityTransition'}
                  timeout={400}
                  classNames="choiceCityTransition"
                  unmountOnExit
              >
                  <ChoiceCity />
              </CSSTransition>
              
              
              <ProfileBar city={point.city ?? 'Москва'} />
              <MediumProfileBar city={point.city ?? 'Москва'} />
              <MobileProfileBar city={point.city ?? 'Москва'} /> 
              <ChoicePoint coord={point.coord_x ? [point.coord_x, point.coord_y] : defaultCoordinates} />
              <CurrentDeliveryPoint point={point} loading={loading} />
              <LastPurchases />
              <OnRoad />
              <BankCards />
          </div>
      </main>
    )
})

export default Profile;
