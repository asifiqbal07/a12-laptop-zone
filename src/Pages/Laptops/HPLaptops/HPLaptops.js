import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import HPLaptop from './HPLaptop';

const HPLaptops = () => {
    const hpLaptops = useLoaderData();
    const { brand } = hpLaptops;
    const [productBooking, setProductBooking] = useState(null);

    return (
        <div className='lg:my-10'>
            <h1 className='text-center font-bold text-4xl lg:mt-12 mb-20'>Pre-Owned <span className='text-[#fb6230]'>HP Laptops</span></h1>
            <div className='grid lg:grid-cols-3  px-5 lg:px-28 gap-10'>
                {
                    brand.laptops.map(hpLaptop => <HPLaptop
                        key={hpLaptop.id}
                        hpLaptop={hpLaptop}
                        setProductBooking={setProductBooking}
                    ></HPLaptop>)
                }
            </div>
            {
                productBooking &&
                <BookingModal
                    productBooking={productBooking}
                ></BookingModal>
            }
        </div>
    );
};

export default HPLaptops;