import React, { useState, useEffect } from 'react';

import Title from './../../General/title';
import Products from '../../General/products';
import ShowYet from './../../General/showYet';
import Loader from '../../General/loader';
import NoSection from '../../General/noSection';

import useRequest from '../../../hooks/useRequest';
import { getProducts } from '../../../api/fetchData';

import './index.scss';






const LastPurchases = () => {
    const [currentPage, setCurrentPage] = useState(5);
    const [startLimit, setStartLimit] = useState(0)
    const countProduct = 5;
    const [data, loading, error] = useRequest(() => getProducts(startLimit, currentPage), [currentPage]);
    const [products, setProducts] = useState([])

    useEffect(() => {
        if (data) {
          setProducts(prevProducts => [...prevProducts, ...data.products])
        }
      }, [data])


    return (
        <section className="last_purchases">
            <Title title="Последние покупки" />

            <Products
                products={products}
            />

            {(loading) ? (
                <Loader /> )
            :
            (!loading && products.length > 0 && data && currentPage + countProduct <= data.count_products) &&
                <ShowYet
                    key={'btn'}
                    btnText={"Показать ещё"}
                    setCurrentPage={setCurrentPage}
                    countProduct={countProduct}
                    currentPage={currentPage}
                    setStartLimit={setStartLimit}
                />
            }

            {
                !loading && products.length <= 0 ?
                    <NoSection message="Нет товаров" />
                :
                    null
            }

        </section>
    )
}

export default LastPurchases;
