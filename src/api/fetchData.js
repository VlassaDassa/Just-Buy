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


// Get all delivery points
export const getAllDeliveryPoints = () => {
  return axios.get(API_ROUTES.getAllDeliveryPoints);
}


// Get all bank cards
export const getAllBankCards = () => {
  return axios.get(API_ROUTES.getAllBankCards);
}


// Add bank card
export async function addBankCard(data) {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  return axios.post(API_ROUTES.addBankCard, data, config);
};


// Update bank card status
export function updateStatusBankCard(id, newValue) {
    const data = {
      id: id,
      newValue: newValue,
    };

    return axios.put(API_ROUTES.updateStatusBankCard, data);
}


// Delete bank card
export function deleteBankCard(id)  {
  return axios.delete(API_ROUTES.deleteBankCard + id + '/')
}

// Get delivery slider
export const getDeliverySlider = () => {
  return axios.get(API_ROUTES.getDeliverySlider);
}

// Get comments stars
export const getCommentsStars = () => {
  return axios.get(API_ROUTES.getCommentsStars);
}
