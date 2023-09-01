import Index from "./../pages/index";
import Profile from "./../pages/profile";
import AddProduct from './../pages/addProduct';




export const publicRoutes = [
    {path: '/', component: Index, exact: true},
    {path: '/index', component: Index, exact: true},
    {path: '/profile', component: Profile, exact: true},
    {path: '/add_product', component: AddProduct, exact: true}
]