import axios from 'axios';
import { API_ROUTES } from './apiConfig';





// Get categories and subcategories for desktop and mobile menu
export const getMenu = () => {
    return axios.get(API_ROUTES.getMenu);
}

// Get subcategories for desktop and mobile menu
export const getMenuSubcategories = (category_id) => {
  return axios.get(API_ROUTES.getMenuSubcategories + category_id + '/');
}

// Get all photo for slider on the index page
export const getSliderPhoto = () => {
  return axios.get(API_ROUTES.getSliderPhoto);
}


// Get products with limit
export const getProducts = (start_limit, count) => {
  return axios.get(API_ROUTES.getProducts + start_limit + '/' + count + '/');
}


// Get all products
export const getAllProducts = () => {
  return axios.get(API_ROUTES.getAllProducts);
}

// Get delivery slider
export const getDeliverySlider = () => {
  return axios.get(API_ROUTES.getDeliverySlider);
}

// Get comments stars
export const getCommentsStars = () => {
  return axios.get(API_ROUTES.getCommentsStars);
}
