import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';


const AddProduct = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const date = format(new Date(), "PP");

    const { data: brands = [], isLoading } = useQuery({
        queryKey: ['Brand'],
        queryFn: async () => {
            const res = await fetch('https://laptop-zone-server.vercel.app/laptops');
            const data = await res.json();
            return data;
        }
    })

    const imageHostKey = process.env.REACT_APP_imgbb_key

    const handleAddProduct = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                }
                const product =
                {
                    seller_name: user.displayName,
                    title: data.productName,
                    location: data.location,
                    resale_price: data.resalePrice,
                    original_price: data.originalPrice,
                    years_of_use: data.purchaseDate,
                    image_url: imgData.data.url,
                    details: data.details,
                    posted: date,
                    id: data.category,
                    email: user.email
                }

                fetch('https://laptop-zone-server.vercel.app/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        toast.success("Booking confirmed")
                        navigate('/dashboard/myproducts')
                        // if (data.acknowledged) {
                        //     toast.success("Booking confirmed")

                        //     navigate('/dashboard/myproducts')
                        // }
                    })
            });

        if (isLoading) {
            return <Loading></Loading>
        }

        }

        return (
            <div className='ml-10'>
                <h2 className='text-4xl  font-bold ml-20'>Add Product</h2>
                <div className=' flex justify-center items-center shadow-xl w-96 mt-10'>
                    <div className='p-4'>

                        <form onSubmit={handleSubmit(handleAddProduct)}>
                            <div className="form-control w-96 max-w-xs">
                                <label className="label"> <span className="label-text">Product Name</span></label>
                                <input type="text" {...register("productName", {
                                    required: "Product Name is Required"
                                })} className="input input-bordered w-96 max-w-xs" />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                            <div className="form-control w-96 max-w-xs">
                                <label className="label"> <span className="label-text">Resale Price</span></label>
                                <input type="text" {...register("originalPrice", {
                                    required: "Original Price is Required"
                                })} className="input input-bordered w-96 max-w-xs" />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                            <div className="form-control w-96 max-w-xs">
                                <label className="label"> <span className="label-text">Original Price</span></label>
                                <input type="text" {...register("resalePrice", {
                                    required: "Resale Price is Required"
                                })} className="input input-bordered w-96 max-w-xs" />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                            <div className="form-control w-96 max-w-xs">
                                <label className="label"> <span className="label-text">Mobile Number</span></label>
                                <input type="text" {...register("number", {
                                    required: "Mobile Number is Required"
                                })} className="input input-bordered w-96 max-w-xs" />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                            <div className="form-control w-96 max-w-xs">
                                <label className="label"> <span className="label-text">Location</span></label>
                                <input type="text" {...register("location", {
                                    required: "Location Name is Required"
                                })} className="input input-bordered w-96 max-w-xs" />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                            <div className="form-control w-96 max-w-xs">
                                <label className="label"> <span className="label-text">Year of Purchase</span></label>
                                <input type="text" {...register("purchaseDate", {
                                    required: "Year of Purchase is Required"
                                })} className="input input-bordered w-96 max-w-xs" />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>

                            {/* Toggle */}
                            <div className='flex justify-between'>
                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Product Condition</span></label>
                                    <div className="input-group w-full">
                                        <select {...register("condition", {
                                            required: true
                                        })}
                                            className="select select-bordered">
                                            <option>Excellent</option>
                                            <option>Good</option>
                                            <option>Fair</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label"> <span className="label-text">Product Category</span></label>
                                    <div className="input-group w-full">
                                        <select {...register("category", {
                                            required: true
                                        })}
                                            className="select select-bordered">

                                            {
                                                brands.map(brand => <option
                                                    key={brand._id}
                                                    value={brand.id}
                                                >{brand.category}</option>)
                                            }

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <textarea {...register("details", {
                                required: true
                            })}
                                className="textarea textarea-info mt-5 w-full" placeholder="Product Details">
                            </textarea>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Photo</span></label>
                                <input type="file" {...register("image", {
                                    required: "Photo is Required"
                                })}
                                    className="file-input file-input-bordered w-full max-w-xs" />
                                {/* {errors.img && <p className='text-red-500'>{errors.img.message}</p>} */}
                            </div>
                            <input className='btn bg-[#fb6230] hover:bg-white hover:text-[#fb6230] border-0 w-full my-4 hover:border hover:border-[#fb6230]' value="Add Product" type="submit" />
                            {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                        </form>

                    </div>
                </div>
            </div>
        );
    };

    export default AddProduct;