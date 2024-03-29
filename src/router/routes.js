import Index from './../pages/index';
import Profile from "../pages/profile";
import AddProduct from "../pages/addProduct";
import Cart from "../pages/cart";
import DeliveryPoint from "../pages/deliveryPoint";





export const publicRoutes = [
    {path: '/', component: Index, exact: true},
    {path: '/index', component: Index, exact: true},

    {path: '/delivery_point/:deliveryPointId', component: DeliveryPoint, exact: true},
]


export const privateRoutes = [
    {path: '/profile', component: Profile, exact: true},
    {path: '/add_product', component: AddProduct, exact: true},
    {path: '/cart', component: Cart, exact: true},
]