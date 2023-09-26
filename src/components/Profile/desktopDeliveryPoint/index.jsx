import React from 'react';
import './index.scss';

import point_photo from './../../../assets/images/product_card/book_1.jpg';





const DesktopDeliveryPoints = ({point}) => {

  

  return (
    <div className={Object.keys(point).length ? 'point' : 'point point--hidden'}>
        <a href="#">
            <div className="point__image_wrapper">
                <img className="point__image" src={point.photo} />
            </div>

            <div className="point__description">
                <p className="point__city">{point.city}</p>
                <p className="point__address">{point.address}</p>
                <p className="point__schedule">{point.schedule}</p>

                <div className="products__rating">
                    <div className="rating__item">
                        <div className="products__circle"></div>
                        <p className="products__number_rating">{point.rating}</p>
                    </div>
                </div>

            </div>
        </a>
    </div> 
  )
}

export default DesktopDeliveryPoints;
