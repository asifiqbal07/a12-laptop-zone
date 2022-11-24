import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HPLaptop from './HPLaptop';

const HPLaptops = () => {
    const hpLaptops = useLoaderData();
    const {brand} = hpLaptops;
    return (
        <div className='lg:my-10'>
            <h1 className='text-center font-bold text-4xl lg:mt-12 mb-20'>Pre-Owned <span className='text-[#fb6230]'>HP Laptops</span></h1>
            <div className='grid lg:grid-cols-3  px-5 lg:px-28 gap-10'>
            {
               brand.laptops.map(hpLaptop => <HPLaptop
               key={hpLaptop.id}
               hpLaptop={hpLaptop}
               ></HPLaptop>)
            }
        </div>
        </div>
    );
};

export default HPLaptops;