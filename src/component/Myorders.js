import { React, useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Spinner } from 'react-bootstrap';
const Myorders = () => {
    const [user] = useAuthState(auth);
    const [products, setProduct] = useState([]);
    const [loading, setloading] = useState(true);
    const email = user?.email;

    useEffect(() => {
        fetch(`https://vast-beyond-32749.herokuapp.com/myorder?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setloading(false);
            })
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
                        <p className='col '><button className='btn btn-info'>Shift</button>
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