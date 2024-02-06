import React, { useState, useEffect } from 'react';

import BannerSlider from './../../components/Index/bannerSlider';
import Title from './../../components/General/title';
import Products from './../../components/General/products';
import ShowYet from './../../components/General/showYet';
import AboutUs from './../../components/Index/aboutUs';
import Loader from './../../components/General/loader';

import useRequest from '../../hooks/useRequest';
import { getProducts } from '../../api/generalAPI';

import './index.scss';



const Index = () => {
    const [currentPage, setCurrentPage] = useState(10);
    
    const [startLimit, setStartLimit] = useState(0)
    const [products, setProducts] = useState([]);
    const countProduct = 5;
    const [data, loading, error] = useRequest(() => getProducts(startLimit, currentPage), [currentPage]);
    
    useEffect(() => {
      document.title = 'Главная'
    }, [])


    useEffect(() => {
      if (data) {
        const uniqueProductIds = new Set(products.map(product => product.id));
        const newProducts = data.products.filter(product => !uniqueProductIds.has(product.id));
        setProducts(prevProducts => [...prevProducts, ...newProducts]);
      }
    }, [data, loading]);



    return (
        <div>
            <BannerSlider />
            <section className="best_products">
                <div className="container">
                    <Title title={'Лучшие товары'}/>

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
                    
                </div>
            </section>
            <AboutUs />
        </div>
    )
};

export default Index;




