import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UserAvatar = ({ user, refetch }) => {

    const makeAdmin = () => {
        fetch(`https://vast-beyond-32749.herokuapp.com/user/admin/${user?.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make admin!!")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin!!');
                }



            })
    }
    return (

        <tr style={{ backgroundColor: ' rgb(50, 48, 48)' }} className=' row text-white fw-bold text-center'>

            <td className='col '>{user.email}</td>
            <td className='col '>{user.role !== 'admin' && <button onClick={makeAdmin} className='btn btn-dark fw-bold'>Make Admin</button>}
            </td>
            <hr />
            <ToastContainer ></ToastContainer>
        </tr>

    );
};

export default UserAvatar;