import React from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';





const YandexMap = () => {
  return (
    <YMaps>
        <div>My awesome application with maps!</div>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
    </YMaps>
  )
}

export default YandexMap;
