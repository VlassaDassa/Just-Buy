import React from 'react';

import CartInfoTitle from '../cartInfoTitle';
import CartInfoButton from '../cartInfoButton';
import CartInfoText from '../cartInfoText';

import './index.scss';





const DeliveryPoint = () => {


    return (
            <div className="cartInfoItem">
                <CartInfoTitle text={'Пункт выдачи'} />

                <CartInfoText text={'Конаково, Пр-кт Ленина д.38'} />

                <CartInfoButton text={'Изменить'} />
            </div>
    )
}

export default DeliveryPoint;
