import React from 'react';

import CartInfoTitle from '../cartInfoTitle';
import CartInfoButton from '../cartInfoButton';
import CartInfoText from '../cartInfoText';

import './index.scss';





const DeliveryPoint = ({ curDelPoint }) => {


    return (
            <div className="cartInfoItem">
                <CartInfoTitle text={'Пункт выдачи'} />

                <CartInfoText text={curDelPoint.length > 0 ? curDelPoint[0].city + ' , ' + curDelPoint[0].address : 'Конаково, Проспект Ленина'} />

                <CartInfoButton text={'Изменить'} />
            </div>
    )
}

export default DeliveryPoint;
