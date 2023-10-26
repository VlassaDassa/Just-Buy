import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import placemark from './../../../assets/images/map/placemark.svg'
import Loader from '../../loader';
import SuccessMessage from "../../SuccessMessage";

import { getStatusDeliveryPoint, choiceDeliveryPoint } from '../../../api/fetchData';
import useRequest from '../../../hooks/useRequest';
import { showError } from '../../../hooks/showError';

import { MAP_API } from '../../../secrets';

import './index.scss';





const CurrentMap = ({ address, coordX, coordY, deliveryPointId }) => {
  const [data, loading, error] = useRequest(() => getStatusDeliveryPoint(deliveryPointId), [])
  const [statusDeliveryPoint, setStatusDeliveryPoint] = useState(false)
  const [loadingChoice, setLoadingChoice] = useState(false)
  const [isVisibleSuccess, setIsVisibleSuccess] = useState(false)


  useEffect(() => {
    if (data && !loading) {
      setStatusDeliveryPoint(data.exists)
    }
  }, [data, loading])


  // Choice delivery point
  function choicePoint() {
    setLoadingChoice(true)

    choiceDeliveryPoint(deliveryPointId)
    .then((response) => {setIsVisibleSuccess(true); setStatusDeliveryPoint(true)})
    .catch((error) => showError(message='Ошибка при выборе пункта'))
    .finally(() => setLoadingChoice(false))
  }


  return (
    <div className="mapWrapper">
        <CSSTransition
          in={isVisibleSuccess}
          key={'transSuccessMessage'}
          timeout={4000}
          classNames="success"
        >
            <SuccessMessage message={'Пункт успешно выбран!'} setIsVisibleSuccess={setIsVisibleSuccess} />
        </CSSTransition>


        <div id="map">
            <Loader additionalClass='mapLoader' />
            <YMaps query={{ apikey: MAP_API }}>
                <Map className="map" defaultState={{ center: [coordX, coordY], zoom: 15 }}>
                  <Placemark
                      key={'placemark'}
                      geometry={[coordX, coordY]}
                      options={{
                        iconLayout: 'default#image',
                        iconImageSize: [40, 40],
                        iconImageHref: placemark,
                      }}

                      properties={{
                        balloonContent: address
                      }}
                      modules={['geoObject.addon.balloon']}
                  />
                </Map>
            </YMaps>
        </div>
        
        {
            statusDeliveryPoint ?
              <button className="map__button map__buttonDisabled" disabled>
                Текущий пункт выдачи
              </button>
            :
              <button className="map__button" onClick={choicePoint} disabled={loadingChoice}>
                {
                  loadingChoice ?
                    <Loader />
                  :
                    'Выбрать пункт выдачи'
                }
              </button>
        }
        
    </div> 
  )
}

export default CurrentMap;
