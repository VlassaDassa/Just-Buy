import React, { useState, useEffect } from 'react';
import { MAP_API } from '../../../secrets';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { observer } from 'mobx-react-lite';

import Title from './../../General/title';
import DeliveryPoint from '../deliveryPoint';
import Loader from '../../General/loader';

import { getAllDeliveryPoints } from '../../../api/profileAPI';
import choiceCity from '../../../store/choiceCity';
import useRequest from '../../../hooks/useRequest';

import placemark from './../../../assets/images/map/placemark.svg'
import './index.scss';  



const YandexMap = observer(({ coord }) => {
    const [data, loading, error] = useRequest(() => getAllDeliveryPoints());
    const [points, setPoints] = useState([]);
    const [currentPoint, setCurrentPoint] = useState({});
    const [currentCoord, setCurrentCoord] = useState([56, 36]) 


    useEffect(() => {
      if (data) {
        setPoints(prevPoints => [...prevPoints, ...data])
      }
    }, [data])

    // Изменение центра карты
    useEffect(() => {
        if (!choiceCity.cityCoord) { setCurrentCoord(coord); return; }

        setCurrentCoord(Array.from(choiceCity.cityCoord))
    }, [choiceCity.cityCoord, coord])


    const changeChoicePoint = (pointId) => {
      setCurrentPoint(points.find(item => item.id === pointId))
    }


    return (
      <section className="delivery_point">
        <Title title="Выбрать пункт выдачи"/>
        <div id="map">
          <DeliveryPointMemo point={currentPoint} />
          <Loader additionalClass='mapLoader'/>

          <YMaps key={currentCoord.join(',')} query={{ apikey: MAP_API }}>
            <Map className="map" defaultState={{ center: currentCoord, zoom: 15 }}>
              {points &&
                points.map((point) => (
                  <Placemark
                    onClick={() => changeChoicePoint(point.id)}
                    key={'placemark' + point.id}
                    geometry={[point.coord_x, point.coord_y]}
                    options={{
                      iconLayout: 'default#image',
                      iconImageSize: [40, 40],
                      iconImageHref: placemark,
                    }}
                  />
                ))
              }
            </Map>
          </YMaps>
        </div>
      </section>
    )
})

const DeliveryPointMemo = React.memo(DeliveryPoint);

export default YandexMap;
