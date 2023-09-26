import React, { useState, useEffect } from 'react';

import Title from '../../title';
import Loader from '../../loader';
import NoSection from '../../noSection';

import useRequest from '../../../hooks/useRequest';
import { getAllDeliveryPoints } from '../../../api/fetchData';


import './index.scss';





const CurrentDeliveryPoint = () => {
    const [data, loading, error] = useRequest(() => getAllDeliveryPoints())
    const [point, setPoint] = useState({})

    useEffect(() => {
        if (data) {
            setPoint(data[0])
        }
    }, [data])

    const loadingCondition = Object.keys(point).length > 0 && !loading
    
    return (
        <section className="current_delivery_point">
            <Title title="Текущий пункт выдачи" />

            {
                !loading && Object.keys(point).length > 0 ?
                    <div className="current_delivery_point__item">
                        <a href="#">
                            <div className="current_delivery_point__img_wrapper">
                                {
                                    loadingCondition ?
                                        <img src={point.photo} className="current_delivery_point__img" />
                                    :
                                    <Loader additionalClass='currentDeliveyLoader' />
                                }
                                
                            </div>

                            <div className="current_delivery_point__description">
                                <p
                                    className={loadingCondition ? 'current_delivery_point__city' : 'current_delivery_point__city fieldLoader'}
                                >
                                    {loadingCondition ? point.city : ''}
                                </p>
                                <p
                                    className={loadingCondition ? 'current_delivery_point__address' : 'current_delivery_point__address fieldLoader w_75'}
                                >
                                    {loadingCondition ? point.address : ''}
                                </p>
                                <p 
                                    className={loadingCondition ? 'current_delivery_point__schedule' : 'current_delivery_point__schedule fieldLoader'}
                                >
                                    {loadingCondition ? point.schedule : ''}
                                </p>
                            </div>

                            <div className="products__rating">
                                <div className="rating__item">
                                    <div className="products__circle"></div>
                                    <p className="products__number_rating">{loadingCondition ? point.rating : '4'}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                :
                    <NoSection message="Выберите пункт выдачи" />
            }

            
        </section>
    )
}

export default CurrentDeliveryPoint;
