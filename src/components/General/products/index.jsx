import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ProductCard from '../productCard';
import SendToCart from '../sendToCart';
import NoSection from '../noSection';

import './index.scss';




const Products = observer(({ products, likeShow = true, cartShow = true, onRoad = false }) => {
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

  
  const showNoSection = products?.map((product) => product.characteristics.in_stock).includes(true);

  return (
    <TransitionGroup className="products">
      <SendToCart inCart={inCart} setInCart={setInCart} />
      
      {showNoSection ? (
          <>
            {products?.map((product) =>
              product.characteristics.in_stock ? (
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
                    isChecked={product.isChecked}
                    count={product.count}
                  />
                </CSSTransition>
              ) : null
            )}
          </>
        ) 
        :
        (
          <NoSection message={'Товаров нет...'} />
        )
      }

    
    </TransitionGroup>
  );
});

export default Products;



