import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LenovoLaptop from './LenovoLaptop';

const LenovoLaptops = () => {
    const lenovoLaptops = useLoaderData();
    const { brand } = lenovoLaptops;
    return (
        <div className='lg:my-10'>
            <h1 className='text-center font-bold text-4xl lg:mt-12 mb-20'>Pre-Owned <span className='text-[#fb6230]'>Lenovo Laptops</span></h1>
            <div className='grid lg:grid-cols-3  px-5 lg:px-28 gap-10'>
                {
                    brand.laptops.map(lenovoLaptop => <LenovoLaptop
                        key={lenovoLaptop.id}
                        lenovoLaptop={lenovoLaptop}
                    ></LenovoLaptop>)
                }
            </div>
        </div>
    );
};

export default LenovoLaptops;