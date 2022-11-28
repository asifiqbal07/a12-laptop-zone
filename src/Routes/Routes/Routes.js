import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AddProduct from "../../Pages/Dashboard/Dashboard/AddProduct/AddProduct";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyProducts from "../../Pages/Dashboard/Dashboard/MyProducts/MyProducts";
import MyBookings from "../../Pages/Dashboard/MyBookings/MyBookings";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import HomeCategories from "../../Pages/Home/HomeCategories/HomeCategories";
import LaptopDetails from "../../Pages/Laptops/LaptopDetails/LaptopDetails";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerRoute from "../SellerRoute/SellerRoute";

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
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
            {
                path: "/laptops",
                element: <HomeCategories></HomeCategories>,
            },
            {
                path: "/laptops/:id",
                element: <PrivateRoutes><LaptopDetails></LaptopDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`https://laptop-zone-server.vercel.app/laptops/${params.id}`)
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path:'/dashboard/myorders',
                element: <BuyerRoute><MyBookings></MyBookings></BuyerRoute>
            },
            {
                path:'/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader: ({params}) => fetch(`https://laptop-zone-server.vercel.app/bookings/${params.id}`)
            },
            {
                path:'/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>,
                loader: () => fetch(`https://laptop-zone-server.vercel.app/laptops`)
            },
            {
                path:'/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>,
            },
        ]
    },
    {
        path: '*', element: <div>
            <Navbar></Navbar>
            <ErrorPage></ErrorPage>
            <Footer></Footer>
        </div>
    }
])