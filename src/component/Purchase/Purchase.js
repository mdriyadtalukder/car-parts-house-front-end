import React, { useEffect, useRef, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Modall from './Modall';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [reload, setReload] = useState(false);
    const { purchaseId } = useParams();
    const quantities = useRef('');
    const quantities2 = useRef('');
    const addresss = useRef('');
    const phoneNo = useRef('');
    const buttondisable = useRef();
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch(`https://vast-beyond-32749.herokuapp.com/products/${purchaseId}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);

            });
    }, [purchaseId]);



    const submitForm = event => {
        event.preventDefault();
        const addresses = addresss.current.value;
        const phoneNumbers = phoneNo.current.value;
        const quantiti = quantities2.current.value;

        const order = {
            name: user?.displayName,
            email: user?.email,
            productName: products?.name,
            price: products?.price,
            quantity: parseInt(quantiti),
            address: addresses,
            phoneNumber: phoneNumbers
        }
        fetch('https://vast-beyond-32749.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        }, [reload])
            .then(response => response.json())
            .then(data => {
                console.log(data);
                toast.success('order is successful!!!');
                event.target.reset();
                setReload(!reload);
            })
    }
    const increase = () => {
        quantities.current.value = parseInt(quantities.current.value) + 1;
        quantities2.current.value = parseInt(quantities2.current.value) + 1;

        if (isNaN(quantities.current.value) || quantities.current.value < products.minimumOrderQuantity || quantities.current.value > products.availableQuantity) {
            toast.error("Sorry!! This is not limited value");
            buttondisable.current.disabled = true;

        }
        else {
            buttondisable.current.disabled = false;

        }

    }

    const descrease = () => {
        quantities.current.value = parseInt(quantities.current.value) - 1;
        quantities2.current.value = parseInt(quantities2.current.value) - 1;
        if (isNaN(quantities.current.value) || quantities.current.value < products.minimumOrderQuantity || quantities.current.value > products.availableQuantity) {

            toast.error("Sorry!! This is not limited value");
            buttondisable.current.disabled = true;

        }
        else {
            buttondisable.current.disabled = false;

        }
    }


    return (
        <div className='container'>
            <div className="text-center">
                <h1 className='fw-bold text-white mt-3'>Click see button to see user name and email</h1>
                <Modall></Modall>
            </div>
            <Row >
                <div className='w-75 mx-auto shadow-lg pt-3 mt-5 mb-5 '>
                    <Col id='avatar' className=' cards pt-3 mt-5 '>
                        <div id='cards-img' className='text-center'>
                            <img src={products?.img} alt="" className='img-fluid' />
                        </div>
                        <div id='avatar-info' className="w-50 mx-auto">
                            <h4 className=' text-white fw-bold pt-5 '>{products?.name}</h4>
                            <p className='pt-3  text-white'>Id: {products?._id}</p>
                            <p className=' text-white'>Available Quantity: {products?.availableQuantity}</p>
                            <p className=' text-white' >Minimum Order Quantity: {products?.minimumOrderQuantity}</p>
                            <h6 className='pb-3  text-white'>Price: ${products?.price}</h6>
                            <p className=' text-white'><span className=' text-white fw-bold'>Description:</span > {products?.description}</p>
                        </div>
                        <div className="text-center pt-3 pb-3">
                            <p className='text-white fw-bold'>Product Purchase Quantity</p>
                            <button onClick={descrease} style={{ backgroundColor: "#FF3117" }} className='me-2 btn text-white fw-bold'>Deccrease Quantity</button>
                            <input ref={quantities} value={products.minimumOrderQuantity} type="text" />
                            <button onClick={increase} style={{ backgroundColor: "#FF3117" }} className='ms-2 btn text-white fw-bold'>Increase Quantity</button>
                        </div>
                    </Col>

                </div>
            </Row>
            <h1 style={{ color: "#FF3117" }} className='fw-bold text-center mt-3 mb-5'>Purchase Form</h1>
            <Form onSubmit={submitForm} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-white fw-bold'>User Email</Form.Label>
                    <Form.Control type="email" disabled readOnly value={user.email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='text-white fw-bold'>User Name</Form.Label>
                    <Form.Control type="text" disabled readOnly value={user.displayName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='text-white fw-bold'>Product Name</Form.Label>
                    <Form.Control disabled readOnly type="text" value={products?.name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label className='text-white fw-bold'> Product Price</Form.Label>
                    <Form.Control disabled readOnly type="text" value={products?.price} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label className='text-white fw-bold'> Product Quantity</Form.Label>
                    <Form.Control ref={quantities2} disabled readOnly type="text" value={products?.minimumOrderQuantity} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label className='text-white fw-bold'>Address</Form.Label>
                    <Form.Control ref={addresss} type="text" placeholder="Enter Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label className='text-white fw-bold'>Phone Number</Form.Label>
                    <Form.Control ref={phoneNo} type="text" placeholder="Enter Phone Number" />
                </Form.Group>
                <div className="text-center pb-4">
                    <button ref={buttondisable} style={{ backgroundColor: "#FF3117" }} className='me-2 btn text-white fw-bold' type="submit">
                        Complete Purchase
                    </button>
                </div>
            </Form>
            <ToastContainer ></ToastContainer>
        </div>


    );
};

export default Purchase;