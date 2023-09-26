import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './index.scss';

import ProductCard from '../productCard';





const Products = ({ products, likeShow=true, cartShow=true, onRoad=false }) => {

  

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
                      likeShow={likeShow}
                      cartShow={cartShow}
                      onRoad={onRoad}
                    />
                  </CSSTransition>
              ))
          }
          
          
        </TransitionGroup>
      </div>
  )
};

export default Products;



