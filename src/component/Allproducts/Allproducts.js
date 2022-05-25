import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ProAvatar from './ProAvatar';

const Allproducts = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [products, setProduct] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        if (user) {
            fetch(`https://vast-beyond-32749.herokuapp.com/allproducts`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })


                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/login')
                    }
                    return res.json();
                })


                .then(data => {
                    setProduct(data);
                    setloading(false);
                })
        }
    }, [products]);
    const deleteItem = id => {
        const remaining = products.filter(item => item._id !== id);
        setProduct(remaining);
    }
    return (
        <>
            {loading ? <div className='d-flex justify-content-center align-items-center mt-5'>
                <Spinner animation="grow" variant="light" />         </div> : <div className='container'>
                <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                    {
                        products?.map(product => <ProAvatar deleteItem={deleteItem} key={product._id} product={product}></ProAvatar>)
                    }
                </div>
            </div>}
        </>
    );
};

export default Allproducts;