import React from 'react';
import { observer } from 'mobx-react-lite';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ProductCard from '../productCard';
import SendToCart from '../sendToCart';

import './index.scss';




const Products = observer(({ products, likeShow = true, cartShow = true, onRoad = false, cartPage = false, cartPageOptions = {} }) => {
  return (
    <TransitionGroup className="products">
      {products?.map((product) => (
        <CSSTransition
          key={'trans' + product.id}
          timeout={500}
          classNames="prod"
        >
          <ProductCard
            key={'product' + product.id}
            name={product.name}
            photo={product.main_photo}
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
      ))}
    </TransitionGroup>
  );
});

export default Products;



