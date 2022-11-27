import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile  lg:my-32">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side mt-1 lg:ml-20">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 text-base-content bg-white">
                        {
                            isBuyer && <>
                            <li><Link to="/dashboard">My Orders</Link></li>
                            </>
                        }

                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All Users</Link></li>
                            </>
                        }

                        {
                            isSeller && <>
                            <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                            <li><Link to="/dashboard/myproducts">My Products</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;