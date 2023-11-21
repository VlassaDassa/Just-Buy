import React, { useState, useEffect } from 'react';

import BannerSlider from './../../components/Index/bannerSlider';
import Title from './../../components/General/title';
import Products from './../../components/General/products';
import ShowYet from './../../components/General/showYet';
import AboutUs from './../../components/Index/aboutUs';
import Loader from './../../components/General/loader';
import NoSection from './../../components/General/noSection';

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
        setProducts(prevProducts => [...prevProducts, ...data.products])
      }
    }, [data, loading])


    return (
        <div>
            <BannerSlider />
            <section className="best_products">
                <div className="container">
                    <Title title={'Лучшие товары'}/>
                    
                      <Products
                        key={'products'}
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
                    
                </div>
            </section>
            <AboutUs />
            тут уебан
        </div>
    )
};

export default Index;




