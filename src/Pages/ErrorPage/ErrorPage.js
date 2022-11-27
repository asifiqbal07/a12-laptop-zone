import React from 'react';
import banner from '../../assets/404.jpg'
const ErrorPage = () => {
    return (
        <div>
           <img className='w-full lg:h-screen' src={banner} alt="" /> 
        </div>
    );
};

export default ErrorPage;