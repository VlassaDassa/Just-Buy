const API_BASE_URL = 'http://192.168.0.118:8000/api/';
// const API_BASE_URL = 'http://127.0.0.1:8000/api/';

export const API_ROUTES = {
    getMenu: API_BASE_URL + 'category/',
    getMenuSubcategories: API_BASE_URL + 'subcategory/',

    getSliderPhoto: API_BASE_URL + 'slider/',
    getAllProducts: API_BASE_URL + 'all_products/',
    getProducts: API_BASE_URL + 'products/',

    getAllDeliveryPoints: API_BASE_URL + 'all_delivery_points/',
    getAllBankCards: API_BASE_URL + 'all_bank_cards/',

    addBankCard: API_BASE_URL + 'add_bank_card/',
    deleteBankCard: API_BASE_URL + 'delete_bank_card/',
    updateStatusBankCard: API_BASE_URL + 'update_bank_card/',

    getDeliverySlider: API_BASE_URL + 'deliveryslider/',
    getCommentsStars: API_BASE_URL + 'comments_stars/',

    getCartProducts: API_BASE_URL + 'cart_products/',
    removeCartProduct: API_BASE_URL + 'delete_cart_product/',
    removeCartProductFromProdId: API_BASE_URL + 'delete_cart_product_from_prod_id/',
    addCartProduct: API_BASE_URL + 'add_cart_product/',
    getCurrentPoint: API_BASE_URL + 'get_current_point/',
    getCurrentBankCard: API_BASE_URL + 'get_current_card/',
    sendPurchasedGoods: API_BASE_URL + 'add_to_on_road/',
}