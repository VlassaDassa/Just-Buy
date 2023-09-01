import Index from "../pages/index";
import Profile from "../pages/profile";
import addProduct from "../pages/addProductBar";




export const publicRoutes = [
    {path: '/', component: Index, exact: true},
    {path: '/index', component: Index, exact: true},
    {path: '/profile', component: Profile, exact: true},
    {path: '/addproduct', component: addProduct, exact: true}
]