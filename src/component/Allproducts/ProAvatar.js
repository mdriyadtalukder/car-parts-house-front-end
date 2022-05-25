import React from 'react';

const ProAvatar = ({ product, deleteItem }) => {
    const { _id, name, img, description, minimumOrderQuantity, availableQuantity, price } = product;

    const deleteItems = id => {

        const proceed = window.confirm("Are you sure to delete this item?");
        if (proceed) {
            fetch(`https://vast-beyond-32749.herokuapp.com/allproducts/${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    deleteItem(_id);
                })
        }

    }
    return (
        <div className='col mb-4'>
            <div className='cards card h-100 shadow rouded'>
                <div id='card-img' className='card-body titles pb-5'>
                    <img src={img} className='img-fluid' alt="" />
                    <h4 className=' fw-bold text-white pt-5 '>{name}</h4>
                    <p className='pt-3 text-white'>Available Quantity: {availableQuantity}</p>
                    <p className='text-white'>Minimum Order Quantity: {minimumOrderQuantity}</p>
                    <h6 className='pb-3 text-white'>Price: ${price}</h6>
                    <p className='text-white'><span className='fw-bold text-white'>Description:</span> {description}</p>
                </div>
                <button onClick={() => deleteItems(_id)} className='btn btn-danger rounded-pill pt-2 pb-2 ps-4 pe-4'>Delete</button>

            </div>
        </div >
    );
}

export default ProAvatar;