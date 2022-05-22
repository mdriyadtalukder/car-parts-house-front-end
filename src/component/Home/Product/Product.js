import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id,name, img, description, minimumOrderQuantity, availableQuantity, price } = product;
    return (
        <div className='col mb-4'>
            <div  className='cards card h-100 shadow rouded'>
                <div id='card-img' className='card-body titles pb-5'>
                    <img src={img} className='img-fluid' alt="" />
                    <h4 className=' fw-bold text-white pt-5 '>{name}</h4>
                    <p className='pt-3 text-white'>Available Quantity: {availableQuantity}</p>
                    <p className='text-white'>Minimum Order Quantity: {minimumOrderQuantity}</p>
                    <h6 className='pb-3 text-white'>Price: ${price}</h6>
                    <p className='text-white'><span className='fw-bold text-white'>Description:</span> {description}</p>
                </div>
                <Link to={`/products/${_id}`} id='btnn' className='btn text-white fw-bold'>Purchase</Link>
            </div>
        </div >
    );
};

export default Product;