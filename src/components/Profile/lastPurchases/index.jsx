import React, { useState, useEffect } from 'react';

import Title from './../../General/title';
import Products from '../../General/products';
import ShowYet from './../../General/showYet';
import Loader from '../../General/loader';

import useRequest from '../../../hooks/useRequest';
import { getUserPurchases } from '../../../api/profileAPI';
import { getProducts } from '../../../api/generalAPI';

import './index.scss';






const LastPurchases = () => {
    const [currentPage, setCurrentPage] = useState(5);
    const [startLimit, setStartLimit] = useState(0)
    const countProduct = 5;
    // const [datasd, loadingsd, errorsd] = useRequest(() => getProducts(startLimit, currentPage), [currentPage]);
    const [data, loading, error] = useRequest(() => getUserPurchases(startLimit, currentPage, localStorage.getItem('user_id')), [currentPage]);
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
            (!loading && products.length > 0 && data && currentPage <= data.count_products) &&
                <ShowYet
                    key={'btn'}
                    btnText={"Показать ещё"}
                    setCurrentPage={setCurrentPage}
                    countProduct={countProduct}
                    currentPage={currentPage}
                    setStartLimit={setStartLimit}
                />
            }


        </section>
    )
}

export default LastPurchases;
