import React from 'react';

import DesktopDeliveryPoints from '../desktopDeliveryPoint';
import MobileDeliveryPoint from '../mobileDeliveryPoint';

import './index.scss';





const DeliveryPoint = ({ point }) => {


  return (
    <div className="point_wrapper">
      <DesktopDeliveryPoints point={point} />
      <MobileDeliveryPoint point={point} />
    </div>
  )
}

export default DeliveryPoint;
