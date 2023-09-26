import React, { useState, useEffect } from 'react';

import BannerSlider from '../../components/bannerSlider';
import Title from '../../components/title';
import Products from '../../components/products';
import ShowYet from '../../components/showYet';
import AboutUs from '../../components/aboutUs';
import Loader from '../../components/loader';
import Overlay from '../../components/overlay';
import NoSection from '../../components/noSection';

import useRequest from '../../hooks/useRequest';
import { getProducts } from '../../api/fetchData';

import './index.scss';



const Index = () => {
    const [currentPage, setCurrentPage] = useState(10);
    
    const [startLimit, setStartLimit] = useState(0)
    const [products, setProducts] = useState([]);
    const countProduct = 5;
    const [data, loading, error] = useRequest(() => getProducts(startLimit, currentPage), [currentPage]);
    
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
            
            <Overlay />
        </div>
    )
};

export default Index;




