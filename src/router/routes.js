import Index from "../pages/Index";
import Profile from "../pages/Profile";
import AddProduct from "../pages/AddProduct";
import Cart from "../pages/Cart";
import DeliveryPoint from "../pages/DeliveryPoint";





export const publicRoutes = [
    {path: '/', component: Index, exact: true},
    {path: '/index', component: Index, exact: true},
    {path: '/profile', component: Profile, exact: true},

    {path: '/add_product', component: AddProduct, exact: true},
    {path: '/cart', component: Cart, exact: true},
    {path: '/delivery_point/:deliveryPointId', component: DeliveryPoint, exact: true},

]