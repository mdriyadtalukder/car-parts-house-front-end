import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Banner from './Banner/Banner';
import Product from './Product/Product';
import Userreviews from './Userreviews';

const Home = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetch('https://vast-beyond-32749.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setloading(false);
            })
    }, [reviews]);

    const { data: products, isLoading } = useQuery('product', () => fetch("https://vast-beyond-32749.herokuapp.com/products")
        .then(res => res.json()));


    return (
        <>
            {loading ? <div className='d-flex justify-content-center align-items-center mt-5'>
                <Spinner animation="grow" variant="light" />         </div> : <div>
                <Banner></Banner>
                <div className="container">
                    <h1 className='fw-bold text-center text-white mt-5 mb-4'>Car Parts Items</h1>
                    <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                        {
                            products?.map(product => <Product key={product._id} product={product}></Product>)
                        }
                    </div>
                    <h1 className='fw-bold text-center text-white mt-5 mb-4'>Reviews</h1>
                    <div className='row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-1 pt-4 mt-5'>
                        {
                            reviews.map(review => <Userreviews review={review} key={review.id}></Userreviews>)
                        }
                    </div>
                </div>
            </div>}
        </>
    );
};

export default Home;