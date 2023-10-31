import axios from 'axios';
import { API_ROUTES } from './apiConfig';




// Receiving categories and relate subcategories
export const getCatWithSubcat = () => {
    return axios.get(API_ROUTES.addProduct.getCatWithSubcat);
}


// Get characteristics fields for page "AddProduct"
export function getCharacteristicsFields(subcategory_id) {
    return axios.get(API_ROUTES.addProduct.getCharacteristicsFields + subcategory_id + '/')
}


// Get all colors
export function getColors() {
    return axios.get(API_ROUTES.addProduct.getColors)
}


// Get all sizes
export function getSizes() {
    return axios.get(API_ROUTES.addProduct.getSizes)
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


    return axios.post(API_ROUTES.addProduct.addProduct, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
}