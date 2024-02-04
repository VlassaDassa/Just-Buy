import axios from 'axios';
import { API_ROUTES } from './apiConfig';




// Receiving cart products
export const getCartProducts = (userId) => {
    return axios.get(API_ROUTES.cart.getCartProducts + userId + '/', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    });
}


// Removing cart product
export const removeCartProduct = (cartId) => {
    return axios.delete(API_ROUTES.cart.removeCartProduct + cartId + '/');
}


// Removing cart product from product id
export const removeCartProductFromProdId = (product_id) => {
    return axios.delete(API_ROUTES.cart.removeCartProductFromProdId + product_id + '/');
}


// Adding cart product
export const addCartProduct = (data) => {
    return axios.post(API_ROUTES.cart.addCartProduct, data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    });
}


// Send purchased goods to the server
export function sendPurchasedGoods(data) {
    return axios.post(API_ROUTES.cart.sendPurchasedGoods, data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
}


// Get relate inputs
export function getSizesAndColors(productId) {
    return axios.get(API_ROUTES.cart.getSizesAndColors + productId + '/')
}


// Get sizes
export function getSizes(sizes) {
    var request = API_ROUTES.cart.getSizes

    sizes.forEach((item) => {
        request += item + '/'
    })

    return axios.get(request)
}





