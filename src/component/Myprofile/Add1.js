import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './forms.css';

const Add1 = () => {
    const [user] = useAuthState(auth);
    const edu = useRef('');
    const locations = useRef('');
    const phone = useRef('');
    const linkin = useRef('');
    const [reload, setReload] = useState(false);
    const [product, setProduct] = useState([]);



    const addItem = event => {
        event.preventDefault();
        const educations = edu.current.value;
        const locationss = locations.current.value;
        const phoneno = phone.current.value;
        const linkins = linkin.current.value;

        // add item's object
        const additems = {
            email: user?.email,
            education: educations,
            locations: locationss,
            phoneNumber: phoneno,
            linkedIn: linkins,
        }

        //add item with conditional statement
        if (educations || locationss || phoneno || linkins)
            fetch(`https://car-parts-house-back-end.onrender.com/myprofile/${user?.email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(additems),
            }, [reload])
                .then(response => response.json())


                .then(data => {
                    console.log(data);
                    toast.success('successfully Complete!!!');
                    event.target.reset();
                    setReload(!reload);
                })

        else {
            toast.error('Please enter at least one input field');
        }
    }

    return (
        <div className='container'>
            <h2 className='text-center fw-bold pt-3'> Update Your About Field</h2>
            <Form id='formm' onSubmit={addItem} className='w-50 mx-auto shadow-lg p-5 mt-1 mb-3'>
                <Form.Group className="mb-3" controlId="formBasicImg">
                    <Form.Label>Education</Form.Label>
                    <Form.Control ref={edu} type="text" placeholder='Type' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Location</Form.Label>
                    <Form.Control ref={locations} type="text" placeholder='Type' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control ref={phone} type="text" placeholder='Type' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSupplierName">
                    <Form.Label>LinkedIn Link</Form.Label>
                    <Form.Control ref={linkin} type="text" placeholder='Type' />
                </Form.Group>
                <button id='btnn' className='btn text-white fw-bold w-100'>Add</button>
            </Form>
            <ToastContainer ></ToastContainer>
        </div>
    );
};

export default Add1;