import React, { useEffect, useState } from "react";

import Location from "../location";
import Info from "../info";
import Feedbacks from "../feedbacks.jsx"

import useRequest from "../../../hooks/useRequest";
import { getDeliveryPoint } from "../../../api/fetchData";

import "./index.scss";





const DeliveryPointBar = () => {
    const deliveryPointId = 1;
    const [data, loading, error] = useRequest(() => getDeliveryPoint(deliveryPointId), [])
    const [pointData, setPointData] = useState({})


    // Initial data
    useEffect(() => {
        if (data && !loading && !error) {
            setPointData(data[0])
        }
    }, [data, loading])

    

    return (
        <>
            <Location address={pointData?.address} coordX={pointData?.coord_x} coordY={pointData?.coord_y} />
            <Info city={pointData?.city} schedule={pointData?.schedule} address={pointData?.address} />
            <Feedbacks feedbacks={pointData?.comments} rating={pointData?.rating} />
        </>
    )
}
export default DeliveryPointBar;