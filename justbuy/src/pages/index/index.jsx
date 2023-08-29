import React, { useState, useEffect } from 'react';

import './index.scss';

import BannerSlider from '../../components/bannerSlider';
import Title from '../../components/title';
import Products from '../../components/products';
import ShowYet from '../../components/showYet';
import AboutUs from '../../components/aboutUs';
import GlobalLoader from '../../components/globalLoader';
import Loader from '../../components/loader';

import useRequest from '../../hooks/useRequest';
import { getProducts } from '../../api/fetchData';
import Overlay from '../../components/overlay';





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
    }, [data])


    return (
        <div>
          {loading && currentPage === 10 ? <GlobalLoader /> : 
            <>
              <BannerSlider />
              <section className="best_products">
                  <div className="container">
                      <Title className={'best_products__title'} title={'Лучшие товары'}/>
                      
                      <Products
                          products={products}
                      />

                      {(loading) ? (
                        <Loader /> )
                        :
                        (data && currentPage + countProduct <= data.count_products) &&
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
              
              <Overlay />
              </>
        }
        </div>
    )
};

export default Index;




