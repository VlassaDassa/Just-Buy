import React, { useState, useEffect } from 'react';

import Title from './../../General/title';
import Products from '../../General/products';
import { getUserOnRoad } from '../../../api/profileAPI';
import useRequest from '../../../hooks/useRequest';

import './index.scss';





const OnRoad = () => {
    const [data, loading, error] = useRequest(() => getUserOnRoad(localStorage.getItem('user_id')), []);
    const [products, setProducts] = useState([])

    useEffect(() => {
        if (data) {
          setProducts(prevProducts => [...prevProducts, ...data.products])
        }
      }, [data])
    

    return (
        <section className="on_road">
            <Title title="В пути"/>
            <Products products={products} onRoad={true} likeShow={false} cartShow={false} />

            
        </section>
    )
}

export default OnRoad;
