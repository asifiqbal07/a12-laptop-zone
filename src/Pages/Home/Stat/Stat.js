import React, { useEffect, useState } from 'react';

const Stat = () => {

    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://laptop-zone-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        fetch('https://laptop-zone-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <div className='lg:my-28 mx-auto lg:px-28 my-10'>
            <h2 className='text-4xl text-center font-bold'>Live Products & Active Users Count!</h2>
            <div className="flex shadow-xl w-full mt-10 rounded-md">

                <div className="stat place-items-center">
                    <div className="stat-title">Total Products</div>
                    <div className="stat-value">{products.length}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value text-[#3078fb]">{users.length}</div>

                </div>

            </div>
        </div>
    );
};

export default Stat;