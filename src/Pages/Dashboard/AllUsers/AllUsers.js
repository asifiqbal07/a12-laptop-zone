import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    // const [deletingUser, setDeletingUser] = useState(null);

    // const closeModal = () => {
    //     setDeletingUser(null);
    // }

    // const { data: users, isLoading, refetch } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         try {
    //             const res = await fetch('http://localhost:5000/allusers', {
    //                 headers: {
    //                     authorization: `bearer ${localStorage.getItem('accessToken')}`
    //                 }
    //             });
    //             const data = await res.json();
    //             return data;
    //         }
    //         catch (error) {

    //         }
    //     }
    // });

    // console.log(users);

    useEffect(() => {
        fetch('http://localhost:5000/allusers')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const {_id:id} = users;

    // const handleMakeAdmin = id => {
    //     fetch(`http://localhost:5000/users/admin/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if(data.modifiedCount > 0){
    //                 toast.success('Make Admin Successful.')
    //                 refetch()
    //             }
    //         })
    // };

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure you want to delete the User?")
        console.log(id);
        if (proceed) {
            fetch(`http://localhost:5000/users/${users.id}`,
                {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully');
                        const remaining = users.filter(rev => rev._id !== id);
                        setUsers(remaining);
                    }
                })
        }
    }

    // const handleDelete = user => {

    //     fetch(`http://localhost:5000/allusers/${user._id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.deletedCount > 0) {
    //                 refetch();
    //                 toast.success('User deleted successfully')
    //             }
    //         })
    // }

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                {/* <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                                <td><button htmlFor="confirmation-modal" onClick={() => handleDelete(user._id)}
                                    className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {/* {
                deletingUser && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete. It cannot be undone.`}
                    successAction={handleDelete}
                    successButtonName="Delete"
                    modalData={deletingUser}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            } */}
        </div>
    );
};

export default AllUsers;