import React, { useRef } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css'
import googleLogo from '../../images/google.webp'
import useToken from '../Hook/useToken';

const SignUp = () => {
    const emailInput = useRef('');
    const nameInput = useRef('');
    const passwordInput = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const [token]=useToken(user || Guser);
    let errors;
    if (error || error1 || Gerror) {
        errors = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (loading || updating || Gloading) {
        return <div className='d-flex justify-content-center align-items-center mt-5'>
            <Spinner animation="grow" variant="light" />         </div>

    }
    if (token || user || Guser) {
        navigate('/');
    }
    const signup = async (event) => {
        event.preventDefault();
        const email = emailInput.current.value;
        const name = nameInput.current.value;
        const password = passwordInput.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }
    return (
        <div id='signup-form' style={{ backgroundColor: 'rgb(50, 48, 48)' }} className='w-25 p-5 shadow-lg mx-auto mt-5 rounded mb-5'>
            <Form onSubmit={signup} >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='text-white fw-bold'>Your name</Form.Label>
                    <Form.Control ref={nameInput} type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-white fw-bold'>Email address</Form.Label>
                    <Form.Control ref={emailInput} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-white fw-bold'>Password</Form.Label>
                    <Form.Control ref={passwordInput} type="password" placeholder="Password" />
                </Form.Group>
                {errors}
                <button style={{ backgroundColor: '#FF3117' }} className='btn sign-btn text-white fw-bold w-100'>Sign Up</button>
                <p className='pt-4 text-white'>Already have an account? <Link to='/login' style={{ color: '#FF3117' }} className='text-decoration-none fw-bold'>Please log in </Link></p>
            </Form>
            <div className='conainer '>
                <div className='d-flex align-items-center'>
                    <div style={{ height: '1px' }} className='bg-light w-50'></div>
                    <p className='mt-2 px-2 text-white'>Or</p>
                    <div style={{ height: '1px' }} className='bg-light w-50'></div>
                </div>
                <button className='btn text-center w-100 bg-light fw-bold socialLogin' onClick={() => signInWithGoogle()}> <img width='30px' src={googleLogo} alt="" /> Sign In With Google</button><br />
            </div>
        </div>
    );
};

export default SignUp;