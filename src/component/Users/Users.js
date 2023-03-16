import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useQuery } from 'react-query';
import UserAvatar from './UserAvatar';

const Users = () => {


    const { data: products, isLoading, refetch } = useQuery('product', () => fetch("https://car-parts-house-back-end.onrender.com/user", {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));
    return (

        <>
            {isLoading ? <div className='d-flex justify-content-center align-items-center mt-5'>
                <Spinner animation="grow" variant="light" /> </div> :
                <table className='container mt-5 mb-5'>
                    <thead style={{ backgroundColor: ' rgb(50, 48, 48)' }} className='row text-whute fw-bold text-center'>


                        <th className='col'>User</th>
                        <th className='col'>Make Admin</th>
                        <hr />
                    </thead>
                    <tbody>
                        {
                            products?.map(user => <UserAvatar refetch={refetch} key={user._id} user={user}></UserAvatar>)
                        }
                    </tbody>
                </table>}

        </>



    );
};

export default Users;