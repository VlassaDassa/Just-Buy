import axios from 'axios';
import { API_ROUTES } from './apiConfig';



// Get particular delivery point
export function getDeliveryPoint(deliveryPointId) {
    return axios.get(API_ROUTES.deliveryPoint.getDeliveryPoint + deliveryPointId + '/')
}


// Обновление/выбор пункта выдачи
export function choiceDeliveryPoint(deliveryPointId, userId) {
    return axios.put(
        API_ROUTES.deliveryPoint.choiceDeliveryPoint + deliveryPointId + '/' + userId + '/',
        {},
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            } 
        }
    );
}

// Получение выбранного пункта выдачи
export const getCurrentDeliveryPoint = (userId) => {
    return axios.get(API_ROUTES.deliveryPoint.getUserDeliveryPoint + userId + '/', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        } 
    });
}


// Определение есть ли комментарий от пользователя для этого пункта выдачи
export const getUserCommentExistPoint = (userId, deliveryPointId) => {
    return axios.get(API_ROUTES.deliveryPoint.getUserCommentExistPoint + userId + '/' + deliveryPointId + '/')
}


// Добавление комментария пользователя
export function addCommentDeliveryPoint(data) {
    return axios.post(API_ROUTES.cart.addCommentDeliveryPoint, data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
          } 
    })
}



