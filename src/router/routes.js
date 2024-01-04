import Index from './../pages/index';
import Profile from "../pages/profile";
import AddProduct from "../pages/addProduct";
import Cart from "../pages/cart";
import DeliveryPoint from "../pages/deliveryPoint";
import MyProducts from '../pages/myProducts';





export const publicRoutes = [
    {path: '/', component: Index, exact: true},
    {path: '/index', component: Index, exact: true},
    {path: '/profile', component: Profile, exact: true},

    {path: '/add_product', component: AddProduct, exact: true},
    {path: '/cart', component: Cart, exact: true},
    {path: '/delivery_point/:deliveryPointId', component: DeliveryPoint, exact: true},
    {path: '/my_products', component: MyProducts, exact: true},

]