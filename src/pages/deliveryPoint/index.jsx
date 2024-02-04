import React, { useEffect } from "react";

import DeliveryPointBar from "../../components/DeliveryPoint/deliveryPoint";




const DeliveryPoint = () => {

    useEffect(() => {
        document.title = 'Пункт выдачи'
      }, [])


    return (
        <main className="delivery_pointPage">
            <div className="container">
                <DeliveryPointBar/>
            </div>
        </main>
    )
}

export default DeliveryPoint;