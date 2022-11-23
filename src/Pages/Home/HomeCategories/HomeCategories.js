import React from 'react';
import hp from '../../../assets/Brands/hp.png'
import dell from '../../../assets/Brands/Dell.png'
import lenovo from '../../../assets/Brands/Lenovo-logo.jpg'
import { Link } from 'react-router-dom';

const HomeCategories = () => {
    return (
        <div className='my-20 px-28'>
            <h1 className="mb-5 text-3xl font-bold py-1 text-center">Explore By <span className='text-[#fb6230]'>Brands</span></h1>

            <div className='grid gap-24 grid-cols-3 mt-16'>
                <Link to='/hplaptops'>
                    <div className="card bg-base-100 shadow-xl transition ease-in-out delay-130  hover:-translate-y-1 hover:scale-110 duration-200 border-t-[8px] border-[#fb6230] rounded-t-lg">
                        <figure className="p4">
                            <img src={hp} alt="" className="rounded-xl h-[60px] mt-8" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold">HP Laptops</h2>
                            
                        </div>
                    </div>
                </Link>
                <Link to='/delllaptops'>
                    <div className="card bg-base-100 shadow-xl  transition ease-in-out delay-130  hover:-translate-y-1 hover:scale-110 duration-200 border-t-[8px] border-[#fb6230] rounded-t-lg">
                        <figure className="p4">
                            <img src={dell} alt="" className="rounded-xl h-[60px] mt-8" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold">DELL Laptops</h2>
                            
                        </div>
                    </div>
                </Link>
                <Link to='/lenovolaptops'>
                    <div className="card bg-base-100 shadow-xl  transition ease-in-out delay-130  hover:-translate-y-1 hover:scale-110 duration-200 border-t-[8px] border-[#fb6230] rounded-t-lg">
                        <figure className="p4">
                            <img src={lenovo} alt="" className="rounded-xl h-[60px] mt-8" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold">Lenovo Laptops</h2>
                            
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HomeCategories;