import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import Product from './Product/Product';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://vast-beyond-32749.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="container">
                <h1 className='fw-bold text-center text-white mt-5 mb-4'>Car Parts Items</h1>
                <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;