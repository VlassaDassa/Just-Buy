const API_BASE_URL = 'http://192.168.1.4:3000/api/';
// const API_BASE_URL = 'http://192.168.56.1:8000/api/';

export const API_ROUTES = {
    getMenu: API_BASE_URL + 'category/',
    getMenuSubcategories: API_BASE_URL + 'subcategory/',
    getSliderPhoto: API_BASE_URL + 'slider/',
    getAllProducts: API_BASE_URL + 'all_products/',
    getProducts: API_BASE_URL + 'products/',
    getDeliverySlider: API_BASE_URL + 'delivery_slider/',
    getCommentsStars: API_BASE_URL + 'comments_stars/',
}