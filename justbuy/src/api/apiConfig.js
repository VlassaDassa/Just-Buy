const API_BASE_URL = 'http://192.168.0.118:8000/api/';

export const API_ROUTES = {
    getMenu: API_BASE_URL + 'category/',
    getMenuSubcategories: API_BASE_URL + 'subcategory/',
    getSliderPhoto: API_BASE_URL + 'slider/',
    getAllProducts: API_BASE_URL + 'all_products/',
    getProducts: API_BASE_URL + 'products/',
}