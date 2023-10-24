import React from 'react';
import { MAP_API } from '../../../secrets';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import placemark from './../../../assets/images/map/placemark.svg'
import Loader from '../../loader';

import './index.scss';





const CurrentMap = ({ address, coordX, coordY }) => {
  return (
    <div className="mapWrapper">
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

        <button className="map__button">
            Выбрать пункт выдачи
        </button>
    </div> 
  )
}

export default CurrentMap;
