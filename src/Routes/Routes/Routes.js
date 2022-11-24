import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
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
                element: <HPLaptops></HPLaptops>,
                loader: ({ params }) => fetch(`http://localhost:5000/laptops/hp`)
            },
            {
                path: "/laptops/hp/:id",
                element: <HPLaptops></HPLaptops>,
                loader: ({ params }) => fetch(`http://localhost:5000/laptops/hp/${params.id}`)
            },
            {
                path: "/laptops/dell",
                element: <DellLaptops></DellLaptops>,
                loader: ({ params }) => fetch(`http://localhost:5000/laptops/dell`)
            },
            {
                path: "/laptops/lenovo",
                element: <LenovoLaptops></LenovoLaptops>,
                loader: ({ params }) => fetch(`http://localhost:5000/laptops/lenovo`)
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    },
])