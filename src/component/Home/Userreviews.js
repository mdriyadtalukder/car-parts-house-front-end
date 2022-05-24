import React from 'react';
import './Userreviews.css';

const Userreviews = ({ review }) => {
    const { img, name, ratings, description } = review;
    let start;
    if (ratings === 5) {
        start = <p className='start'><i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i></p>
    }
    else {
        start = <p className='start'><i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i></p>
    }
    return (
        <div  className='col mb-4'>
            <div id='ravatar' className='card h-100 shadow rouded'>
                <div className='card-body user'>
                    <img src={img} className='img-fluid' alt="" />
                    <small className='ps-3 fw-bold text-white'>{name}</small>
                    <p className='pt-3  text-white'>{description}</p>
                </div>
                <div className='d-flex justify-content-between p-3'>
                    {start}
                    <h5 className=' text-white'>{ratings}</h5>
                </div>
            </div>
        </div>
    );
};
export default Userreviews;
