import axios from 'axios';
import { API_ROUTES } from './apiConfig';



// Receiving categories and subcategories for desktop and mobile menu
export const getMenu = () => {
    return axios.get(API_ROUTES.general.getMenu);
}


// Receiving subcategories for desktop and mobile menu
export const getMenuSubcategories = (category_id) => {
    return axios.get(API_ROUTES.general.getMenuSubcategories + category_id + '/');
}


// Receiving products with limit
export const getProducts = (start_limit, count) => {
    return axios.get(API_ROUTES.general.getProducts + start_limit + '/' + count + '/');
}


// Receiving all products
export const getAllProducts = () => {
    return axios.get(API_ROUTES.general.getAllProducts);
}