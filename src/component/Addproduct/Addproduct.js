import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Addproduct = () => {
    const [user] = useAuthState(auth);
    const namevalue = useRef('');
    const navigate = useNavigate();
    const imgvalue = useRef('');
    const descriptionvalue = useRef('');
    const pricevalue = useRef('');
    const minimumorderQuantity = useRef('');
    const availablequantity = useRef('');
    const [reload, setReload] = useState(false);
    const addItem = event => {
        event.preventDefault();
        const name = namevalue.current.value;
        const img = imgvalue.current.value;
        const description = descriptionvalue.current.value;
        const price = pricevalue.current.value;
        const minOrderQuantity = minimumorderQuantity.current.value;
        const availableQuantiti = availablequantity.current.value;

        // add item's object
        const additems = {
            name: name,
            img: img,
            description: description,
            minimumOrderQuantity: parseInt(minOrderQuantity),
            availableQuantity: parseInt(availableQuantiti),
            price: parseInt(price),

        }

        //add item with conditional statement
        if (name && img && description && price && minOrderQuantity && availableQuantiti) {
            fetch('https://vast-beyond-32749.herokuapp.com/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(additems),
            }, [reload])
                .then(response => response.json())


                .then(data => {
                    console.log(data);
                    toast('item successfully added!!!');
                    event.target.reset();
                    setReload(!reload);
                })

        }
        else {
            toast('Please enter the all input field')
        }
    }
    return (
        <div>
            <div style={{ minHeight: '90vh' }} className='mt-3 mb-3' >
                <h1 className='text-center fw-bold'>Add New Items</h1>
                <Form id='additemform' onSubmit={addItem} className='w-50 mx-auto shadow-lg p-5 mt-3 mb-3'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control ref={namevalue} type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicImg">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control ref={imgvalue} type="text" placeholder="Enter Image Link" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control ref={descriptionvalue} type="text" placeholder="Enter Description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicQuantity">
                        <Form.Label> Minimum Order Quantity</Form.Label>
                        <Form.Control ref={minimumorderQuantity} type="text" placeholder="Enter Minimum Quantity" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSupplierName">
                        <Form.Label>Available Quantity</Form.Label>
                        <Form.Control ref={availablequantity} type="text" placeholder="Enter Available Quantity" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label> Product Price</Form.Label>
                        <Form.Control ref={pricevalue} type="text" placeholder="Enter Price" />
                    </Form.Group>

                    <button id='btnn' className='btn text-white fw-bold w-100'>Add Product</button>
                </Form>
                <ToastContainer ></ToastContainer>
            </div>
        </div>
    );
};

export default Addproduct;