import React, { useState, useEffect } from 'react';

import Title from '../../title';
import Products from '../../products';
import NoSection from '../../noSection';

import useRequest from '../../../hooks/useRequest';
import { getProducts } from '../../../api/fetchData';

import './index.scss';





const OnRoad = () => {
    const [currentPage, setCurrentPage] = useState(2);
    const [startLimit, setStartLimit] = useState(0)
    const [data, loading, error] = useRequest(() => getProducts(startLimit, currentPage), [currentPage]);
    const [products, setProducts] = useState([])

    useEffect(() => {
        if (data) {
          setProducts(prevProducts => [...prevProducts, ...data.products])
        }
      }, [data])
    

    return (
        <section className="on_road">
            <Title title="В пути"/>

            {
              !loading && products.length > 0 ?
                <Products products={products} onRoad={true} likeShow={false} cartShow={false} />
              :
                <NoSection message="Нет доставок" />
            }

            
        </section>
    )
}

export default OnRoad;
