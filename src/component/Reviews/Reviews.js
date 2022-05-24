import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {
    const namevalue = useRef('');
    const imgvalue = useRef('');
    const ratingvalue = useRef('');
    const descriptionvalue = useRef('');
    const [reload, setReload] = useState(false);

    const addItem = event => {
        event.preventDefault();
        const name = namevalue.current.value;
        const img = imgvalue.current.value;
        const description = descriptionvalue.current.value;
        const rating = ratingvalue.current.value;

        // add item's object
        const additems = {

            name: name,
            img: img,
            ratings: parseFloat(rating),
            description: description,


        }

        //add item with conditional statement
if(rating && description){
        fetch('https://vast-beyond-32749.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(additems),
        }, [reload])
            .then(response => response.json())
            .then(data => {
                console.log(data);
                toast('Review successfully added!!!');
                event.target.reset();
                setReload(!reload);
            })

    }
    else {
        toast.error('Please fill up the important input field')
    }
}


    return (
        <div>
            <div className='mt-3 mb-3'>
                <h1 className='text-center fw-bold'>Add New Reviews</h1>
                <Form id='additemform' onSubmit={addItem} className='w-50 mx-auto shadow-lg p-5 mt-3 mb-3'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control ref={namevalue} type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicImg">
                        <Form.Label>User Image</Form.Label>
                        <Form.Control ref={imgvalue} type="text" placeholder="Enter Image Link" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label> Ratings</Form.Label>
                        <Form.Control ref={ratingvalue} type="text" placeholder="Enter Ratings" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descriptionvalue} type="text" placeholder="Enter Description" />
                    </Form.Group>
                    <button id='btnn' className='btn text-white fw-bold w-100'>Add Item</button>
                </Form>
                <ToastContainer ></ToastContainer>
            </div>
        </div>
    );
};

export default Reviews;