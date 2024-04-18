
import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Updateprofile from "../pages/Updateprofile";
import UserProfile from "../pages/UserProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EstateInfo from "../Component/EstateInfo";
import EstateDetails from "../pages/EstateDetails";
import Shop from "../pages/Shop";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/updateprofile',
                element: <Updateprofile></Updateprofile>
            },
            {
                path: '/userprofile',
                element: <UserProfile></UserProfile>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/estateinfo',
                element: <EstateInfo></EstateInfo>
            },
            {
                path: '/estatedetails/:id',
                element: <EstateDetails></EstateDetails>,
                loader: () => fetch('/estate.json')
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
        ]
    },
]);
export default router;