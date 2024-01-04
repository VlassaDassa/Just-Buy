import React from "react";
import './index.scss';

import ProductCard from "../../General/productCard";

import { observer } from 'mobx-react-lite';
import myProductsStore from '../../../store/myProducts';

const Prod = observer(({likeShow = true, cartShow = true}) => {
    const store = myProductsStore;
    const {selectedCategory, groupCategory} = store;

    const cat = Object.keys(groupCategory);


    return (
        <>
            <section className="child_clothes category_item" data-prod-category="child">
                {cat.map((category) => (
                    <React.Fragment key={category}>
                        {selectedCategory.includes(category) ? (
                            <>
                                <div className="sect__header_wrapper">
                                    <div className="sect__header">
                                        <h1 className="sect__title">{category}</h1>
                                    </div>
                                </div>
                                <div className="prod_wrapper">
                                    {category && (
                                        <>
                                            <div className="products">
                                            
                                            {selectedCategory.length === 0 || (selectedCategory.includes(category) && ( groupCategory[category])
                                                .map((product) => (
                                                    
                                                        <ProductCard
                                                            key={product.id}
                                                            name={product.name}
                                                            photo={product.main_photo}
                                                            price={product.price}
                                                            // rating={product.rating}
                                                            rating={product.successful}
                                                            countFeedback={product.count_feedbacks}
                                                            product_id={product.id}
                                                            count={product.count}
                                                            likeShow = {likeShow}
                                                            cartShow={cartShow}
                                                        />
                                                ))
                                            )}
                                            </div>
                                        </>
                                    )}
                                    {groupCategory[category].length > 5 && (
                                        <div className="show_more">
                                            <button className="show_more__btn">Показать ещё</button>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : null}
                    </React.Fragment>
                ))}
            </section>
        </>
    );
});
export default Prod;
