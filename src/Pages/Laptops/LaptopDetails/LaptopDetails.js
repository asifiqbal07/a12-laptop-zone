import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import LaptopDetail from './LaptopDetail';

const LaptopDetails = () => {
    const laptopDetails = useLoaderData();
    const [productBooking, setProductBooking] = useState(null);
    console.log(laptopDetails);
    return (
        <div className='lg:my-10'>
            <h1 className='text-center font-bold text-4xl lg:mt-12 mb-20'>Pre-Owned <span className='text-[#fb6230]'> Laptops</span></h1>
            <div className='grid lg:grid-cols-3  px-5 lg:px-28 gap-10'>
                {
                    laptopDetails.map(laptop=><LaptopDetail
                    key={laptop._id}
                    laptop={laptop}
                    setProductBooking={setProductBooking}
                    ></LaptopDetail>)
                }
            </div>
            {
                productBooking &&
                <BookingModal
                    productBooking={productBooking}
                    setProductBooking={setProductBooking}
                ></BookingModal>
            }
        </div>
    );
};

export default LaptopDetails;