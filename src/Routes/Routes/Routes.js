import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AddProduct from "../../Pages/Dashboard/Dashboard/AddProduct/AddProduct";
import MyBookings from "../../Pages/Dashboard/MyBookings/MyBookings";
import Home from "../../Pages/Home/Home/Home";
import HomeCategories from "../../Pages/Home/HomeCategories/HomeCategories";
import LaptopDetails from "../../Pages/Laptops/LaptopDetails/LaptopDetails";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
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
                path: "/laptops",
                element: <HomeCategories></HomeCategories>,
            },
            {
                path: "/laptops/:id",
                element: <PrivateRoutes><LaptopDetails></LaptopDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/laptops/${params.id}`)
            }
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
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
        ]
    },
])