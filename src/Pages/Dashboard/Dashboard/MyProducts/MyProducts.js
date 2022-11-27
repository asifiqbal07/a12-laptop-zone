import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider';

const MyProducts = () => {

    const { user, logOut } = useContext(AuthContext);
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/products?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('laptopZone-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => setProducts(data))
    }, [user?.email, logOut])

    console.log(products);

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure you want to delete the Product?")
        if (proceed) {
            fetch(`http://localhost:5000/products/${id}`,
                {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully');
                        const remaining = products.filter(rev => rev._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }


    return (
        <div className='lg:mr-28 '>
            <h1 className=' font-bold text-4xl mb-20'>My <span className='text-[#fb6230]'>Orders</span></h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Title</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products &&
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <th>
                                    <button onClick={() => handleDelete(product._id)} className='btn btn-circle mt-1 '>X</button>
                                </th>
                                <td>{product.title}</td>
                                <td>{product.resale_price}</td>
                                {/* <td>
                                {
                                    booking.price && !booking.paid && <Link
                                        to={`/dashboard/payment/${booking._id}`}
                                    >
                                        <button
                                            className='btn btn-primary btn-sm'
                                        >Pay</button>
                                    </Link>
                                }
                                {
                                    booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                }
                            </td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;