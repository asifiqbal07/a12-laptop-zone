import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Shared/Login/Login/Login";
import SignUp from "../../Pages/Shared/Login/SignUp/SignUp";

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
                element: <SignUp></SignUp>,
            },
            {
                path: "/laptops/dell",
                element: <SignUp></SignUp>,
            },
            {
                path: "/laptops/lenovo",
                element: <SignUp></SignUp>,
            },
        ]
    },
])