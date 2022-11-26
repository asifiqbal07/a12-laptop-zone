import React from 'react';
import { useQuery } from '@tanstack/react-query';
import HomeCategory from './HomeCategory';

const HomeCategories = () => {
    const { data: allCategories = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/laptops');
            const data = await res.json();
            return data;
        }
    });
    console.log(allCategories);
    return (
        <div className='my-20 px-28'>
            <h1 className="mb-5 text-3xl font-bold py-1 text-center">Explore By <span className='text-[#fb6230]'>Brands</span></h1>

            <div className='grid gap-24 grid-cols-3 mt-16'>
                {
                    allCategories.map(category => <HomeCategory
                    key={category.id}
                    category={category}
                    ></HomeCategory>)
                }
            </div>
        </div>
    );
};

export default HomeCategories;