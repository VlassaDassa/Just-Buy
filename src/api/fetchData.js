import axios from 'axios';
import { API_ROUTES } from './apiConfig';





// Receiving categories and subcategories for desktop and mobile menu
export const getMenu = () => {
    return axios.get(API_ROUTES.getMenu);
}


// Receiving categories and relate subcategories
export const getCatWithSubcat = () => {
    return axios.get(API_ROUTES.getCatWithSubcat);
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


// Receiving comments stars
export const getCommentsStars = () => {
  return axios.get(API_ROUTES.getCommentsStars);
}


// Receiving cart products
export const getCartProducts = () => {
  return axios.get(API_ROUTES.getCartProducts);
}


// Removing cart product
export const removeCartProduct = (cartId) => {
  return axios.delete(API_ROUTES.removeCartProduct + cartId + '/');
}


// Removing cart product from product id
export const removeCartProductFromProdId = (product_id) => {
  return axios.delete(API_ROUTES.removeCartProductFromProdId + product_id + '/');
}


// Adding cart product
export const addCartProduct = (product_id) => {
  return axios.post(API_ROUTES.addCartProduct + product_id + '/');
}


// Getting current bank card
export const getCurrentBankCard = () => {
  return axios.get(API_ROUTES.getCurrentBankCard);
}


// Getting current delivery pount
export const getCurrentDeliveryPoint = () => {
  return axios.get(API_ROUTES.getCurrentPoint);
}


// Send purchased goods to the server
export function sendPurchasedGoods(data) {
  return axios.post(API_ROUTES.sendPurchasedGoods, data)
}


// Get characteristics fields for page "AddProduct"
export function getCharacteristicsFields(subcategory_id) {
  return axios.get(API_ROUTES.getCharacteristicsFields + subcategory_id + '/')
}


// Get all colors
export function getColors() {
  return axios.get(API_ROUTES.getColors)
}


// Get all sizes
export function getSizes() {
  return axios.get(API_ROUTES.getSizes)
}


// Add product
export function addProduct(data) {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('count', data.count);
    formData.append('subcategory', data.subcategory);
    formData.append('description', data.description);
    formData.append('characteristics', JSON.stringify(data.characteristics));


    // Add photos
    data.photos.forEach((photo, index) => {
      if (photo.main) {
        formData.append('mainPhoto', photo.file)
      }
      else {
        formData.append('product_photo', photo.file);
      }
    });


    return axios.post(API_ROUTES.addProduct, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
}


// Get particular delivery point
export function getDeliveryPoint(deliveryPointId) {
  return axios.get(API_ROUTES.getDeliveryPoint + deliveryPointId + '/')
}


// Get status delivery point
export function getStatusDeliveryPoint(deliveryPointId) {
  return axios.get(API_ROUTES.getStatusDeliveryPoint + deliveryPointId + '/')
}


// Choice delivery point
export function choiceDeliveryPoint(deliveryPointId) {
  return axios.put(API_ROUTES.choiceDeliveryPoint + deliveryPointId + '/')
}


