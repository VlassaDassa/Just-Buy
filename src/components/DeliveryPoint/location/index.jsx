import React from "react";

import PhotoSlider from "../photoSlider";
import Title from "../../title";
import CurrentMap from "../currentMap";

import "./index.scss";






const Location = ({ address, coordX, coordY, photosArray }) => {
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
                
                <CurrentMap address={address} coordX={coordX} coordY={coordY} />
            </div> 
        </section>
    )
};

export default Location;