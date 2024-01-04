import React from "react";
import "./index.scss";

import ProductCard from "../../General/productCard";

import { observer } from "mobx-react-lite";
import myProductsStore from "../../../store/myProducts";

const ProdWithoutCategory = observer(({ likeShow = true, cartShow = true }) => {
    const store = myProductsStore;
    const { selectedCategory, groupCategory, sortProducts, selectedSortType } = store;

    const cat = Object.keys(groupCategory);

    return (
        <>
            <section
                className="child_clothes category_item"
                data-prod-category="child"
            >
                <React.Fragment>
                    <>
                        {/* <div className="sect__header_wrapper"> */}
                            <div className="sect__header">
                                <h1 className="sect__title"></h1>
                            </div>
                        {/* </div> */}
                        <div className="prod_wrapper">
                            <>
                                <div className="products">
                                    {sortProducts().map((product) => (
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
                                        likeShow={likeShow}
                                        cartShow={cartShow}
                                    />
))}
                                </div>
                            </>

                            <div className="show_more">
                                <button className="show_more__btn">Показать ещё</button>
                            </div>
                        </div>
                    </>
                </React.Fragment>
            </section>
        </>
    );
});
export default ProdWithoutCategory;
