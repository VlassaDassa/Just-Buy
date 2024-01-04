import React, {useEffect} from "react";
import ProdHeader from "../prod_header";
import Categories from "../categories";
import Prod from "../prod";
import './index.scss';

import { getCartProducts, removeCartProduct } from "./../../../api/cartAPI";
import useRequest from "./../../../hooks/useRequest";

import { observer } from 'mobx-react-lite';
import myProductsStore from '../../../store/myProducts';
import ProdWithoutCategory from "../prodWithoutCategory";


const MyProductsBar = observer(() => {

    const store = myProductsStore

    const {setProducts, selectedSortType, products} = store
    
    const [data, loading, error] = useRequest(() => getCartProducts(), [])

    useEffect(() => {
        if (data && !loading) {
            store.setProducts(data)
            store.setGroupCategory()
        }
    }, [loading])

    return (
        <>            
            <main className="my_products">
                <div className="container">
                    <ProdHeader
                    />
                    
                    {selectedSortType === 'all' 
                    ? <>
                        <Categories/>
                        <Prod/>
                    </> 
                    : (
                        <>
                            <section className="categories">
                                <h1 className="sect__title">{selectedSortType}</h1>
                            </section>
                            <ProdWithoutCategory/>
                        </>
                        )
                    }

                    {products.length === 0 &&                     
                    <div className="no_section my_prod_no_prod">
                        Товаров нет
                    </div>
                    }

                </div> 
            </main>
        </>
    )
})

export default MyProductsBar;