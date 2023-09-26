import React, { useState, useEffect } from 'react';
import { MAP_API } from '../../../secrets';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import Title from '../../title';
import DeliveryPoint from '../deliveryPoint';
import Loader from '../../loader';

import { getAllDeliveryPoints } from '../../../api/fetchData';
import useRequest from '../../../hooks/useRequest';

import './index.scss';
import placemark from './../../../assets/images/map/placemark.svg'



const YandexMap = () => {
  const [data, loading, error] = useRequest(() => getAllDeliveryPoints());
  const [points, setPoints] = useState([]);
  const [currentPoint, setCurrentPoint] = useState({});
  

  useEffect(() => {
    if (data) {
      setPoints(prevPoints => [...prevPoints, ...data])
    }
  }, [data])


  const changeChoicePoint = (pointId) => {
    setCurrentPoint(points.find(item => item.id === pointId))
  }


  return (
    <section className="delivery_point">
      <Title title="Выбрать пункт выдачи"/>
      <div id="map">
        <DeliveryPointMemo point={currentPoint} />
        <Loader additionalClass='mapLoader'/>

        <YMaps query={{ apikey: MAP_API }}>
          <Map className="map" defaultState={{ center: [56.709529, 36.809052], zoom: 15 }}>
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
}

const DeliveryPointMemo = React.memo(DeliveryPoint);

export default YandexMap;
