import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { purchaseId } = useParams();
    const quantities = useRef('');
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {

        fetch(`https://vast-beyond-32749.herokuapp.com/products/${purchaseId}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);

            });
    }, [purchaseId]);

    const increase = () => {
        if (isNaN(quantities.current.value) || quantities.current.value < products?.minimumOrderQuantity || quantities.current.value >= products?.availableQuantity) {
            alert('Enter valid number');

        }
        else {
            quantities.current.value = parseInt(quantities.current.value) + 1;
        }

    }
    const descrease = event => {
        if (isNaN(quantities.current.value) || quantities.current.value <= products?.minimumOrderQuantity || quantities.current.value > products?.availableQuantity) {
            alert('Enter valid number');

        }
        else {
            quantities.current.value = parseInt(quantities.current.value) - 1;
        }

    }

    return (
        <div className='container'>
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
                            <button onClick={descrease} style={{ backgroundColor: "#FF3117" }} className='me-2 btn text-white fw-bold'>Deccrease Quantity</button>
                            <input ref={quantities} value={products?.minimumOrderQuantity} type="text" />
                            <button onClick={increase} style={{ backgroundColor: "#FF3117" }} className='ms-2 btn text-white fw-bold'>Increase Quantity</button>
                        </div>

                        {/* <Row>
                            <Col>
                                <Form onSubmit={increase} className='w-75 mx-auto'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='text-white'>Enter Increase Quantity</Form.Label>
                                        <Form.Control ref={quantities} type="text" placeholder="Enter Increase Quantity" />
                                    </Form.Group>
                                    <div className='text-center pt-2 pb-2'>
                                        <button style={{ backgroundColor: "#FF3117" }} className='btn text-white fw-bold'>Increase Quantity</button>
                                    </div>
                                </Form>
                            </Col>
                            <Col>
                                <Form className='w-75 mx-auto'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='text-white'>Enter Decrease Quantity</Form.Label>
                                        <Form.Control ref={quantities} type="text" placeholder="Enter Decrease Quantity" />
                                    </Form.Group>
                                    <div className='text-center pt-2 pb-2'>
                                        <button style={{ backgroundColor: "#FF3117" }} className='btn text-white fw-bold'> Decrease Quantity</button>
                                    </div>
                                </Form>
                            </Col>
                        </Row> */}
                    </Col>

                </div>
            </Row>
        </div>


    );
};

export default Purchase;