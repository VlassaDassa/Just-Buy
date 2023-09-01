import React from "react";
import "./index.scss";
import Location from "../location";
import Info from "../info";
import Feedbacks from "../feedbacks"

const DeliveryPointBar = () => {
    return (
        <main className="delivery_point">
            <div className="container">
                <Location/>
                <Info/>
                <Feedbacks/>
            </div>
        </main>
    )
}

export default DeliveryPointBar;