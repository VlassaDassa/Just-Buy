import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';





const MobileDeliveryPoint = ({point}) => {


  
  return (
    <div className={Object.keys(point).length ? 'mobile_point' : 'mobile_point mobile_point--hidden'}>
      <Link to={'/delivery_point/' + point.id}>
        <div className="mobile_point__description">
          <p className="mobile_point__city" title={point.city}>{point.city}</p>
          <p className="mobile_point__address" title={point.address}>{point.address}</p>
          <p className="mobile_point__schedule">{point.schedule}</p>
        </div>
      </Link>
    </div>
  )
}

export default MobileDeliveryPoint;
