import React from "react";
import "./index.scss";
import Location from "../location";
import Info from "../info";
import Feedbacks from "../feedbacks"

const DeliveryPointBar = () => {
    return (
        <>
            <Location/>
            <Info/>
            <Feedbacks/>
        </>
    )
}

export default DeliveryPointBar;