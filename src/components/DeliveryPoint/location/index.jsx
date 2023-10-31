import React from "react";

import PhotoSlider from "./../photoSlider";
import Title from './../../General/title';
import CurrentMap from "./../currentMap";
import Info from "./../info";

import "./index.scss";






const Location = ({ 
        address,

        coordX,
        coordY,
        photosArray,
        deliveryPointId,

        city,
        schedule,
    }) => {

    return (
        <section className="location">
            <Title title={'Пункт выдачи'} />
            
            <div className="location_wrapper">
                {
                    photosArray && photosArray.length > 0 ?
                        <PhotoSlider photosArray={photosArray} />
                    :
                        null
                }
                
                <CurrentMap 
                    address={address} 
                    coordX={coordX} 
                    coordY={coordY} 
                    deliveryPointId={deliveryPointId}
                />

                <Info 
                    city={city}
                    schedule={schedule}
                    address={address}

                    mobile={true}
                />

            </div> 
        </section>
    )
};

export default Location;