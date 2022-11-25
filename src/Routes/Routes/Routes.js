import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyBookings from "../../Pages/Dashboard/MyBookings/MyBookings";
import Home from "../../Pages/Home/Home/Home";
import DellLaptops from "../../Pages/Laptops/DellLaptops/DellLaptops";
import LenovoLaptops from "../../Pages/Laptops/DellLaptops/LenovoLaptops/LenovoLaptops";
import HPLaptops from "../../Pages/Laptops/HPLaptops/HPLaptops";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/laptops/hp",
                element: <PrivateRoutes><HPLaptops></HPLaptops></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/laptops/hp`)
            },
            {
                path: "/laptops/dell",
                element: <PrivateRoutes><DellLaptops></DellLaptops></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/laptops/dell`)
            },
            {
                path: "/laptops/lenovo",
                element: <PrivateRoutes><LenovoLaptops></LenovoLaptops></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/laptops/lenovo`)
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path:'/dashboard',
                element: <MyBookings></MyBookings>
            },
            {
                path:'/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
        ]
    },
])