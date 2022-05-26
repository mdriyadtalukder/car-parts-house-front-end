import { React, useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Spinner } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
const Myorders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [products, setProduct] = useState([]);
    const [loading, setloading] = useState(true);
    const email = user?.email;

    useEffect(() => {
        if (user) {
            fetch(`https://vast-beyond-32749.herokuapp.com/myorder?email=${email}`, {
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
                        <p className='col '><Link to={`/dashboard/payment/${item._id}`} className='btn btn-dark fw-bold'>Pay</Link>
                            <button className='btn btn-danger'>Delete</button></p>
                        <hr />
                    </div>)
                }
            </div>
            }
        </>





    );
};

export default Myorders;