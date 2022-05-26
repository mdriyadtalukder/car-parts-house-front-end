import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './Pay.css'
import CheckoutForm from './CheckoutForm ';
const stripePromise = loadStripe('pk_test_51L3LGsGXmk1rhYit8tbIRXbeg8dazaE2cJxDJqWlGX57rFCKpNJPjQ35ALso5RQcpFtgUnSJ1Kb5xLiDT5F5t8SA00tKwFcxSX');
const Payment = () => {

    const { id } = useParams();
    const [myorder, setProducts] = useState([]);
    useEffect(() => {

        fetch(`https://vast-beyond-32749.herokuapp.com/myorder/${id}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);

            });
    }, [id]);
    return (
        <div id='pay' className='contaner  w-50 mx-auto shadow-lg rounder'>

            <div className=' row'>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
                    <h4 style={{ color: '#FF3117' }} className='fw-bold pt-5'>Hello, {myorder?.name}</h4>
                    <div className=' ps-5 pe-5 pt-2 pb-3 mb-2' style={{ backgroundColor: 'rgb(50, 48, 48)' }}>
                        <h3>Please Pay for {myorder?.productName}</h3>
                        <p className='fs-5'>Please pay: ${myorder?.price}</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col col col-lg-12 col-md-12 col-sm-12 col-12">
                    <div id='payment' className='bg-white ps-5 pe-5 pt-2 pb-5'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm myorder={myorder}></CheckoutForm>

                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;