import axios from 'axios';
import { API_ROUTES } from './apiConfig';




// Register user
export function registerUser(data) {
    return axios.post(API_ROUTES.auth.registerUser, data)
}


// Login user
export function loginUser(data) {
    return axios.post(API_ROUTES.auth.loginUser, data)
}