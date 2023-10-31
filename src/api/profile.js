import axios from 'axios';
import { API_ROUTES } from './apiConfig';




// Receiving all delivery points
export const getAllDeliveryPoints = () => {
    return axios.get(API_ROUTES.profile.getAllDeliveryPoints);
};


// Receiving all bank cards
export const getAllBankCards = () => {
    return axios.get(API_ROUTES.profile.getAllBankCards);
};


// Adding bank card
export async function addBankCard(data) {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
  
    return axios.post(API_ROUTES.profile.addBankCard, data, config);
};


// Deleting bank card
export function deleteBankCard(id)  {
    return axios.delete(API_ROUTES.profile.deleteBankCard + id + '/')
}


// Updating bank card status
export function updateStatusBankCard(id, newValue) {
    const data = {
      id: id,
      newValue: newValue,
    };

    return axios.put(API_ROUTES.profile.updateStatusBankCard, data);
}


// Getting current bank card
export const getCurrentBankCard = () => {
    return axios.get(API_ROUTES.profile.getCurrentBankCard);
}