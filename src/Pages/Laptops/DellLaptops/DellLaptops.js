import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import DellLaptop from './DellLaptop';

const DellLaptops = () => {
    const dellLaptops = useLoaderData();
    const { brand } = dellLaptops;
    const [productBooking, setProductBooking] = useState(null);
    return (
        <div className='lg:my-10'>
            <h1 className='text-center font-bold text-4xl lg:mt-12 mb-20'>Pre-Owned <span className='text-[#fb6230]'>DELL Laptops</span></h1>
            <div className='grid lg:grid-cols-3  px-5 lg:px-28 gap-10'>
                {
                    brand.laptops.map(dellLaptop => <DellLaptop
                        key={dellLaptop.id}
                        dellLaptop={dellLaptop}
                        setProductBooking={setProductBooking}
                    ></DellLaptop>)
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

export default DellLaptops;