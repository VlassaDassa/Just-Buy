import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ProductCard from '../productCard';
import SendToCart from '../sendToCart';

import './index.scss';




const Products = observer(({ products, likeShow = true, cartShow = true, onRoad = false, cartPage = false, cartPageOptions = {} }) => {
  const [inCart, setInCart] = useState()


  // Defining products, who in cart
  useEffect(() => {
      if (products.length > 0) {
          const inCartArray = products
            .filter(item => item.is_in_cart)
            .map(item => item.id);
          
            setInCart(inCartArray)
      }
  }, [products])


  return (
    <TransitionGroup className="products">
      <SendToCart inCart={inCart} setInCart={setInCart} />

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
            inCart={inCart}
            setInCart={setInCart}
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



