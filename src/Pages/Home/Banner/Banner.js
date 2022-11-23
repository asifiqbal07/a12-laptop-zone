import React from 'react';
import background from '../../../assets/Banner.jpg';
import logo from '../../../assets/Logo - White.png'

const Banner = () => {
    return (
        <div className="hero lg:min-h-screen" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md flex flex-col items-center">
                    <div><img className='w-48' src={logo} alt="" /></div>
                    <h1 className="mb-5 text-5xl font-bold py-1">Laptop Zone</h1>
                    <p className="mb-5 text-2xl py-3">Used Or Brand New Open Box Laptop. For Wholesale & Retail</p>
                    <button className="btn bg-[#fb6230] hover:bg-white hover:text-[#fb6230]">View Store</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;