import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Allorders = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [products, setProduct] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        if (user) {
            fetch(`https://car-parts-house-back-end.onrender.com/order`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })


                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/login')
                    }
                    return res.json();
                })


                .then(data => {
                    setProduct(data);
                    setloading(false);
                })
        }
    }, [products]);
    return (
        <>
            {loading ? <div className='d-flex justify-content-center align-items-center mt-5'>
                < Spinner animation="grow" variant="light" />         </div > : <div className='container mt-5 mb-5'>
                <div style={{ backgroundColor: ' rgb(50, 48, 48)' }} className='row text-whute fw-bold'>
                    <p className='col'>Product Name</p>
                    <p className='col'>Product Price</p>
                    <p className='col'>Product Quantity</p>
                    <p className='col'>User Email</p>
                    <p className='col'>Action</p>
                    <hr />
                </div>
                {
                    products?.map(item => <div style={{ backgroundColor: ' rgb(50, 48, 48)' }} className=' row text-white fw-bold'>
                        <p className='col ' >{item.productName}</p>
                        <p className='col '>{item.price}</p>
                        <p className='col '>{item.quantity}</p>
                        <p className='col '>{item.email}</p>
                        <p className='col '>
                            {
                                item.paid && <button className='btn btn-dark fw-bold'>Pending</button>
                            }
                            {
                                !item.paid && <button className='btn btn-dark fw-bold'>Unpaid</button>
                            }
                        </p>
                        <hr />
                    </div>)
                }
            </div>
            }
        </>
    );
};

export default Allorders;