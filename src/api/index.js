import axios from 'axios';
import { API_ROUTES } from './apiConfig';



// Receiving all photo for slider on the index page
export const getSliderPhoto = () => {
    return axios.get(API_ROUTES.index.getSliderPhoto);
  }
  