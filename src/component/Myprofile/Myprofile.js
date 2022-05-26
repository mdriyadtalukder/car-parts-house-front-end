import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Add1 from './Add1';

const Myprofile = () => {
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        fetch(`https://vast-beyond-32749.herokuapp.com/myprofile/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setloading(false);
            })

    }, [product])



    return (
        <div className='container'>

            <div className='row'>
                <h1 className='text-white fw-bold text-center mt-3'>My Profile</h1>
                <div className='col col-lg 12 col-md-12 col-sm-12 col-12'>
                    <div className="row">
                        <div className="col col-lg 6 col-md-6 col-sm-6 col-6 p-5">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div>
                                    <p className='fw-bold fs-4 mt-4'>User Name: {user?.displayName}</p>
                                    <p className='fw-bold fs-4'>User Email: {user?.email}</p>
                                </div>
                            </div>

                        </div>
                        <div className="col col-lg 6 col-md-6 col-sm-6 col-6 p-5">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div>
                                    {product.education ? <p>User Education : {product.education}</p> : <p>User Education: Please Set Your Education</p>}
                                    {product.location ? <p>User Location : {product.location}</p> : <p>User Location: Please Set Your Location</p>}
                                    {product.phoneNumber ? <p>User Phone Number : {product.phoneNumber}</p> : <p>User Phone Number: Please Set Your Phone Number</p>}
                                    {product.linkedIn ? <p>User LinkedIn Link : {product.linkedIn}</p> : <p>User LinkedIn Link: Please Set Your LinkedIn Link</p>}
                                    <Link id='btnn' to='/dashboard/update' className='btn text-white' >Update Profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>



                    <Add1></Add1>
                </div>
            </div>
        </div>
    );
};

export default Myprofile;