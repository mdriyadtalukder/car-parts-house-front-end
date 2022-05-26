import React from 'react';
import Footer from '../Footer/Footer';

const Blogs = () => {

    //questions and answers
    return (
        <div>
            <div className='container'>
                <h1 className='text-center mt-3'>Questions and answers</h1>
                <div className='row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                    <div className='col mb-4'>
                        <div id='cards' className='card h-100 shadow rouded'>
                            <div className='card-body titles pb-5'>
                                <h3 className='text-center'></h3>
                                <p></p>
                            </div>
                        </div>
                    </div >
                    <div className='col mb-4'>
                        <div id='cards' className='card h-100 shadow rouded'>
                            <div className='card-body titles pb-5'>
                                <h3 className='text-center'></h3>
                                <p></p>
                            </div>
                        </div>
                    </div >
                    <div className='col mb-4'>
                        <div id='cards' className='card h-100 shadow rouded'>
                            <div className='card-body titles pb-5'>
                                <h3 className='text-center'></h3>
                                <p></p>
                            </div>
                        </div>
                    </div >
                    <div className='col mb-4'>
                        <div id='cards' className='card h-100 shadow rouded'>
                            <div className='card-body titles pb-5'>
                                <h3 className='text-center'></h3>
                                <p></p>
                            </div>
                        </div>
                    </div >
                    <div className='col mb-4'>
                        <div id='cards' className='card h-100 shadow rouded'>
                            <div className='card-body titles pb-5'>
                                <h3 className='text-center'></h3>
                                <p></p>
                            </div>
                        </div>
                    </div >
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;