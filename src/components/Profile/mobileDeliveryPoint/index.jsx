import React from 'react';
import './index.scss';





const MobileDeliveryPoint = ({point}) => {


  
  return (
    <div className={Object.keys(point).length ? 'mobile_point' : 'mobile_point mobile_point--hidden'}>
      <a href="">
        <div className="mobile_point__description">
          <p className="mobile_point__city">{point.city}</p>
          <p className="mobile_point__address">{point.address}</p>
          <p className="mobile_point__schedule">{point.schedule}</p>
        </div>
      </a>
    </div>
  )
}

export default MobileDeliveryPoint;
