import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';





const DesktopDeliveryPoints = ({ point }) => {


  return (
    <div className={Object.keys(point).length ? 'point' : 'point point--hidden'}>
        <Link to={'/delivery_point/' + point.id}>
            <div className="point__image_wrapper">
                <img className="point__image" src={point.main_photo} />
            </div>

            <div className="point__description">
                <p className="point__city" title={point.city}>{point.city}</p>
                <p className="point__address" title={point.address}>{point.address}</p>
                <p className="point__schedule">{point.schedule}</p>

                <div className="products__rating">
                    <div className="rating__item">
                        <div className="products__circle"></div>
                        <p className="products__number_rating">{point.rating}</p>
                    </div>
                </div>

            </div>
        </Link>
    </div> 
  )
}

export default DesktopDeliveryPoints;
