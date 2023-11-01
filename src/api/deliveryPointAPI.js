import axios from 'axios';
import { API_ROUTES } from './apiConfig';





// Get particular delivery point
export function getDeliveryPoint(deliveryPointId) {
    return axios.get(API_ROUTES.deliveryPoint.getDeliveryPoint + deliveryPointId + '/')
}


// Get status delivery point
export function getStatusDeliveryPoint(deliveryPointId) {
    return axios.get(API_ROUTES.deliveryPoint.getStatusDeliveryPoint + deliveryPointId + '/')
}


// Choice delivery point
export function choiceDeliveryPoint(deliveryPointId) {
    return axios.put(API_ROUTES.deliveryPoint.choiceDeliveryPoint + deliveryPointId + '/')
}


// Getting current delivery pount
export const getCurrentDeliveryPoint = () => {
    return axios.get(API_ROUTES.deliveryPoint.getCurrentPoint);
  }


  



