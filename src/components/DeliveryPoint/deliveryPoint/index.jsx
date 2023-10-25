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
    const [photosArray, setPhotosArray] = useState([])


    // Initial data
    useEffect(() => {
        if (data && !loading) {
            setPointData(data[0])

            // Formatted data for slider
            const photos = [...data[0]?.photos?.map(photoItem => ({
                id: photoItem.id,
                photo: photoItem.photo
            })), {
                id: 'main_photo' + data[0].id,
                photo: data[0].main_photo
            }]

            // Set main photo to the beginning of the array
            const sortedPhotos = [
                                    photos.find(item => String(item.id).includes("main")),
                                    ...photos.filter(item => !String(item.id).includes("main"))
                                ]

            setPhotosArray(sortedPhotos)

        }
    }, [data, loading])



    return (
        <>
            <Location 
                address={pointData?.address} 
                coordX={pointData?.coord_x} 
                coordY={pointData?.coord_y} 
                photosArray={photosArray}
            />

            <Info city={pointData?.city} schedule={pointData?.schedule} address={pointData?.address} />

            <Feedbacks feedbacks={pointData?.comments} rating={pointData?.rating} />
        </>
    )
}
export default DeliveryPointBar;