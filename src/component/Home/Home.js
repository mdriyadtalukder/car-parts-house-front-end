import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Banner from './Banner/Banner';
import Product from './Product/Product';
import Userreviews from './Userreviews';
import './Home.css'
import Footer from '../Footer/Footer';

const Home = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetch('https://car-parts-house-back-end.onrender.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setloading(false);
            })
    }, [reviews]);

    const { data: products, isLoading } = useQuery('product', () => fetch("https://car-parts-house-back-end.onrender.com/products")
        .then(res => res.json()));


    return (
        <>
            {loading ? <div className='d-flex justify-content-center align-items-center mt-5'>
                <Spinner animation="grow" variant="light" />         </div> : <div>
                <Banner></Banner>
                <section className='container text-white'>
                    <h1 className='fw-bold text-white text-center mb-5 mt-5'>Car Parts House</h1>
                    <p className='fs-5'>The Car parts house is changing at a rapid pace. As technology becomes a more intricate part of the driving experience, car part manufacturers and suppliers are changing to keep up with current needs. The industry is fiercely competitive, with approximately 4,000 companies in the Dhaka alone competing for share in a $405-billion-market, which is expected to grow to $448B in 2022.</p>
                    <p className='fs-5'>The major companies in the Dhaka market today include brick-and-mortar providers such as Advance Car Parts,  and O’Reilly Car Parts, and  automotive aftermarket pure-play retailers, such as CarParts.com and RockAuto that offer easy-to-install replacement parts for used cars and trucks. These sites market, ship, and sell a wide range of auto parts, including transmission and power train components, engines, braking systems, electronics, and more. </p>
                    <p className='fs-5'>Eventually, the car parts industry will reflect the worldwide, massive expansion of vehicle manufacturing. Together with changes in the post-COVID world and steadily increasing demand and competition, companies must maintain a competitive advantage. </p>
                    <p className='fs-5'>
                        Throughout the pandemic, public transportation use has plummeted as people have preferred to use private vehicles, primarily to avoid crowds. This trend is expected to continue in the post-COVID age, as people are nervous to go back to “the way things were.” Crowded busses and trains may become a thing of the past, with more and more people turning to private cars when possible. This trend also helps explain the increased demand for used cars and car parts.


                    </p>
                </section>
                <div className="container">
                    <h1 className='fw-bold text-center text-white mt-5 mb-4'>Car Parts Items</h1>
                    <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                        {
                            products?.map(product => <Product key={product._id} product={product}></Product>)
                        }
                    </div>

                    <section className='container text-white mb-3'>
                        <h1 className='text-center fw-bold mt-3 mb-5'>Millon Bussiness Trust Us</h1>
                        <div className='row'>
                            <div className='col col-lg-3 col-md-6 col-sm-12 col-12 text-center'>
                                <p class='icn'><i class="fas fa-hand-holding-usd"></i></p>
                                <h1>145M+</h1>
                                <p className='fs-5'>Annual Revenue</p>
                            </div>
                            <div className='col col-lg-3 col-md-6 col-sm-12 col-12 text-center'>
                                <p class='icn'><i class="fas fa-tools"></i></p>
                                <h1>114K+</h1>
                                <p className='fs-5'>Tools</p>
                            </div>
                            <div className='col col-lg-3 col-md-6 col-sm-12 col-12 text-center'>
                                <p class='icn'><i class="fas fa-users"></i></p>
                                <h1>546k</h1>
                                <p className='fs-5'>Happy Clients</p>
                            </div>
                            <div className='col col-lg-3 col-md-6 col-sm-12 col-12 text-center'>
                                <p class='icn'><i class="fas fa-people-carry"></i></p>
                                <h1>10M+</h1>
                                <p className='fs-5'>Feedback</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h1 className='text-center fw-bold text-white mt-5 mb-5'>Latest Product</h1>
                        <div className="row g-3">
                            <div className="col col-lg-4 col-md-4 col-sm-12 col-12" >
                                <div className='img-card text-center' >
                                    <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0633/7098/5728/files/2._Brakes.png?v=1647351791" alt="" />
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className='img-card text-center'>
                                    <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0633/7098/5728/files/4._car-horn.png?v=1647351915" alt="" />
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-4 col-sm-12 col-12 ">
                                <div className='img-card text-center'>
                                    <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0633/7098/5728/files/Tools.png?v=1647494167" alt="" />
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className='img-card text-center'>
                                    <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0633/7098/5728/files/10._car-body-part.png?v=1647351768" alt="" />
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className='img-card text-center'>
                                    <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0633/7098/5728/files/7._Tyre.png?v=1647351962" alt="" />
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-4 col-sm-12 col-12 ">
                                <div className='text-center img-card' >
                                    <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0633/7098/5728/files/5._BULB-and-LED.png?v=1647351814" alt="" />
                                </div>
                            </div>

                        </div>
                    </section>

                    <h1 className='fw-bold text-center text-white mt-5 mb-4'>Reviews</h1>
                    <div className='row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-1 pt-4 mt-5'>
                        {
                            reviews.map(review => <Userreviews review={review} key={review.id}></Userreviews>)
                        }
                    </div>
                </div>
                <Footer></Footer>
            </div>}
        </>
    );
};

export default Home;