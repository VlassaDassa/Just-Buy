import axios from 'axios';
import { API_ROUTES } from './apiConfig';





// Receiving categories and subcategories for desktop and mobile menu
export const getMenu = () => {
    return axios.get(API_ROUTES.getMenu);
}

// Receiving subcategories for desktop and mobile menu
export const getMenuSubcategories = (category_id) => {
  return axios.get(API_ROUTES.getMenuSubcategories + category_id + '/');
}

// Receiving all photo for slider on the index page
export const getSliderPhoto = () => {
  return axios.get(API_ROUTES.getSliderPhoto);
}


// Receiving products with limit
export const getProducts = (start_limit, count) => {
  return axios.get(API_ROUTES.getProducts + start_limit + '/' + count + '/');
}


// Receiving all products
export const getAllProducts = () => {
  return axios.get(API_ROUTES.getAllProducts);
}


// Receiving all delivery points
export const getAllDeliveryPoints = () => {
  return axios.get(API_ROUTES.getAllDeliveryPoints);
}


// Receiving all bank cards
export const getAllBankCards = () => {
  return axios.get(API_ROUTES.getAllBankCards);
}


// Adding bank card
export async function addBankCard(data) {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  return axios.post(API_ROUTES.addBankCard, data, config);
};


// Updating bank card status
export function updateStatusBankCard(id, newValue) {
    const data = {
      id: id,
      newValue: newValue,
    };

    return axios.put(API_ROUTES.updateStatusBankCard, data);
}


// Deleting bank card
export function deleteBankCard(id)  {
  return axios.delete(API_ROUTES.deleteBankCard + id + '/')
}


// Receiving delivery slider
export const getDeliverySlider = () => {
  return axios.get(API_ROUTES.getDeliverySlider);
}


// Receiving comments stars
export const getCommentsStars = () => {
  return axios.get(API_ROUTES.getCommentsStars);
}


// Receiving cart products
export const getCartProducts = () => {
  return axios.get(API_ROUTES.getCartProducts);
}


// Removing cart product
export const removeCartProduct = (product_id) => {
  return axios.delete(API_ROUTES.removeCartProduct + product_id + '/');
}

