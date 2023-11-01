import React, { useState, useEffect } from "react";

import CartInfo from "./../cartInfo";
import Products from './../../General/products';
import { showError } from "./../../../hooks/showError";
import NoSection from "../../General/noSection";

import useRequest from "./../../../hooks/useRequest";
import { getCartProducts, removeCartProduct } from "./../../../api/cartAPI";

import "./index.scss";



const CartBar = () => {
    const [data, loading, error] = useRequest(() => getCartProducts(), []);

    const [products, setProducts] = useState([]);

    const [totalCount, setTotalCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    // Products
    useEffect(() => {
        if (data && !loading) {
            setProducts(data)
        }
    }, [loading])


    // Calculating of the total price on initial render
    useEffect(() => {
        calculateTotal(products)
    }, [])


    // Recalculation of the total price, when changing the array with products
    useEffect(() => {
        calculateTotal(products)
    }, [products])


    // Changing values on any actions
    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
            let tempProduct = products.map((product) => {
                return { ...product, isChecked: checked, count: checked ? 1 : 0};
            });
            setProducts(tempProduct);
        } else {
            let tempProduct = products.map((product) =>
                product.name === name ? { ...product, isChecked: checked, count: checked ? 1 : 0} : product
            );
            setProducts(tempProduct);
        }
        calculateTotal(products)
    };


    const incrementProduct = (productId) => {
        const updatedProducts = products.map((product) => {
            if ((product.id === productId) && (product.totalCount != product.count)) {
                return { ...product, count: product.count + 1 };
            }
            return product;
        });
        setProducts(updatedProducts);
    };


    const decrementProduct = (productId) => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId && product.count > 0) {
                return { ...product, count: product.count - 1 };
            }
            return product;
        });
        setProducts(updatedProducts);
    };


    const removeProduct = (productId) => {
        removeCartProduct(productId)
        .then(response => {
        if (response.status !== 200) {
            showError('Ошибка при удалении товара')
        }
        else {
            setProducts(products.filter((product) => product.id !== productId));
            calculateTotal(products)
        }
        })
        .catch(error => {
        showError('Ошибка при удалении товара')
        })
    };


    const calculateTotal = () => {
        let totalCount = 0;
        let totalPrice = 0;

        products.forEach((product) => {
            if (product.isChecked) {
                totalCount += product.count;
                totalPrice += product.price * product.count;
            }
        });

        setTotalCount(totalCount);
        setTotalPrice(totalPrice);
    };

    
    // Functions and props for custom products component
    const cartPageOptions = {
        'handleChange': handleChange,
        'onIncrement': incrementProduct,
        'onDecrement': decrementProduct,
        'onRemove': removeProduct,
        'calculateTotal': calculateTotal,
    }


    // Condition for button "All"
    const isAllChecked = products.length === 0 ? false : !products.some((product) => product?.isChecked !== true);

    return (
        <>
            <div className="cart__header">
                <h1 className="cart__title">
                    Корзина <span className="cart__count_items">{products.length}</span>
                </h1>


                <label className="cart__checkbox cart__checkbox_all"> Всё
                    <input type="checkbox" name="allSelect" onClick={calculateTotal} onChange={handleChange} checked={isAllChecked} />
                    <span className="cart__checkmark cart__checkmark_all"></span>
                </label>
            </div>

            {
                (!products || products.length === 0) && !loading ?
                    <NoSection message={'Корзина пуста'} additionalClass={'cartNoSection'} />
                :
                    <Products
                        products={products}
                        cartPage={true}
                        cartPageOptions={cartPageOptions}
                    />
            }

            

            <CartInfo products={products} totalCount={totalCount} totalPrice={totalPrice} setProducts={setProducts} />
        </>
    )

}
export default CartBar;



