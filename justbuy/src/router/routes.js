<<<<<<< HEAD
import Index from "../pages/index";
import Profile from "../pages/profile";
import AddProduct from "../pages/addProductBar";
import Cart from "../pages/cart";
import DeliveryPoint from "../pages/deliveryPoint";
=======
import Index from "./../pages/index";
import Profile from "./../pages/profile";
import AddProduct from './../pages/addProduct';
>>>>>>> 4045abc3fa181d59759cb9429611435c499b0cf1




export const publicRoutes = [
    {path: '/', component: Index, exact: true},
    {path: '/index', component: Index, exact: true},
    {path: '/profile', component: Profile, exact: true},
<<<<<<< HEAD
    {path: '/addproduct', component: AddProduct, exact: true},
    {path: '/cart', component: Cart, exact: true},
    {path: '/deliverypoint', component: DeliveryPoint, exact: true},
=======
    {path: '/add_product', component: AddProduct, exact: true}
>>>>>>> 4045abc3fa181d59759cb9429611435c499b0cf1
]