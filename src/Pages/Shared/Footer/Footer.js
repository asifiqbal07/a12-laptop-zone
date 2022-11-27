import React from 'react';
import logo from '../../../assets/Logo - White.png'
import { FaTwitter,FaYoutube,FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
        <div className=''>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content lg:px-28">
            <div className="items-center grid-flow-col">
                <img className='h-12' src={logo} alt="" />
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div className="flex justify-around items-center text-2xl mx-auto">
                <a className='block mx-7'  href="/"><FaTwitter></FaTwitter></a>
                <a className='block mx-7' href="/"><FaYoutube></FaYoutube></a>
                <a className='block mx-7' href="/"><FaFacebook></FaFacebook></a>
            </div>
        </footer>
        </div>
    );
};

export default Footer;