import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Error.css';
import img from '../../images/682010.png'

const Error = () => {
    return (
        <div>
            <div className='container text-center text-danger pb-4'>
                <img className='mt-5 img-fluid' width='200px' src={img} alt="" />
                <h1 className='text-danger error-title'>404</h1>
                <h3 className='text-danger'>Error-Something's missing</h3>
                <p className='w-75 mx-auto pt-2'>Sorry, the page you are looking for could not be found. Kindly do one thing: if you've typed the
                    URL manually, double check the spelling.Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p>
                <Link className='text-danger fw-bold fs-5' to='/'>Go to home page</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;