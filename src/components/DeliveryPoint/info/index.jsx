import React from "react";
import { observer } from "mobx-react-lite";

import overlay from "../../../store/overlay";
import mobileMap from "../../../store/mobileMap";

import "./index.scss";





const Info = observer(({ city, schedule, address, mobile=false }) => {



    function showMobileMap() {
        overlay.toggleShow(true)
        mobileMap.toggleShow(true)
    }



    return (
        <section className={mobile ? 'delivery_point_infoMobile' : 'delivery_point_info'}>
            <div className="delivery_point_info__item">
                <h1 className="delivery_point_info__title">
                    Адрес:
                </h1>  

                <div className="delivery_point_info__text">
                    <p className="delivery_point_info__paragraph delivery_point_info__city">
                        Город: {city}
                    </p>

                    <p className="delivery_point_info__paragraph delivery_point_info__street">
                        {address}
                    </p>
                </div>
            </div> 

            <div className="delivery_point_info__item">
                <h1 className="delivery_point_info__title">
                    Режим работы:
                </h1>  

                <div className="delivery_point_info__text">
                    <p className="delivery_point_info__paragraph delivery_point_info__days">
                        Ежедневно
                    </p>

                    <p className="delivery_point_info__paragraph delivery_point_info__hours">
                        {schedule}
                    </p>
                </div> 
            </div>

            <button className="openMapBtn" onClick={showMobileMap}>
                Открыть карту
            </button>

        </section>
    )
})

export default Info;