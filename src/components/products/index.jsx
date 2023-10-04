import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ProductCard from '../productCard';

import './index.scss';




const Products = ({ products, likeShow=true, cartShow=true, onRoad=false, cartPage=false, cartPageOptions={} }) => {
  

  return (
      <div className="products">
       <TransitionGroup
        component={null}
       >
          {
              products.map((product) => (
                  <CSSTransition
                      key={'trans' + product.id}
                      timeout={500}
                      classNames="prod"
                  >
                    <ProductCard
                      key={'products' + product.id}

                      name={product.name}
                      photo={product.product_photo}
                      price={product.price}
                      rating={product.rating}
                      countFeedback={product.count_feedbacks}
                      product_id={product.id}
                      is_in_cart={product.is_in_cart}

                      likeShow={likeShow}
                      cartShow={cartShow}
                      onRoad={onRoad}

                      cartPage={cartPage}
                      cartPageOptions={cartPageOptions}
                      isChecked={product.isChecked}
                      count={product.count}
                    />

                  </CSSTransition>
              ))
          }
          
          
        </TransitionGroup>
      </div>
  )
};

export default Products;



