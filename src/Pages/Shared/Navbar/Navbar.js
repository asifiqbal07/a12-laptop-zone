import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSortDown } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li tabIndex={0} className=''>
            <Link className="justify-between">
                Laptops <FaSortDown></FaSortDown>
            
            </Link>
            <ul className="p-2">
                <li className='btn hover:text-[#fb6230] rounded-none'><Link to='/laptops/hp'>HP</Link></li>
                <li className='btn hover:text-[#fb6230] rounded-none'><Link to='/laptops/dell'>DELL</Link></li>
                <li className='btn hover:text-[#fb6230] rounded-none'><Link to='/laptops/lenovo'>Lenovo</Link></li>
            </ul>
        </li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li>{
            user?.uid ?
                <>
                    <Link to='/addpackage'>Add Package</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                    <button onClick={handleLogOut} className="btn btn-ghost border-0 rounded-none hover:rounded-none">LogOut</button>
                </>
                :
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign Up</Link>
                </>
        }</li>
    </>
    return (
        <div className="navbar bg-base-100 my-2 lg:px-28">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>


                {/* Company Name */}
                <Link to='/' className="normal-case text-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ">
                    <div className='flex items-center'>
                        <div className='mr-5'><span className='text-4xl font-bold'>Laptop <span className='text-[#fb6230]'>Zone</span></span></div>
                    </div>
                </Link>
                {/*  */}

            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end ">

                <ul className="menu menu-horizontal p-0 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none mr-3">
                    <ul >
                        {
                            user?.uid ?
                                <Link className='font-semibold' to='/profile'>{user?.displayName}</Link>
                                :
                                <></>
                        }
                    </ul>
                </ul>
                <ul className="menu menu-horizontal p-0 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                    {/* <Link to='/profile'>{user?.photoURL ?
                        <img className='rounded-full h-10 shadow-md' src={user?.photoURL} alt="" />
                        :
                        <FaUser></FaUser>
                    }
                    </Link> */}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;