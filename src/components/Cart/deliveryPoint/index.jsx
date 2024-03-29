import React from 'react';
import { Link } from 'react-router-dom';

import CartInfoTitle from '../cartInfoTitle';
import CartInfoButton from '../cartInfoButton';
import CartInfoText from '../cartInfoText';






const DeliveryPoint = ({ curDelPoint }) => {

    return (
            <div className="cartInfoItem">
                <CartInfoTitle text={'Пункт выдачи'} />

                <CartInfoText text={curDelPoint && Object.keys(curDelPoint).length > 0 ? curDelPoint.city + ' , ' + curDelPoint.address : 'Не выбрано'} />
                
                <Link to='/profile'><CartInfoButton text={'Изменить'} /></Link>
            </div>
    )
}

export default DeliveryPoint;
