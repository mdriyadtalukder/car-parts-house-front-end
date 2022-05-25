import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import googleLogo from '../../images/google.webp';
import './Login.css';
import { Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../Hook/useToken';


const Login = () => {
    const emailValue = useRef('');
    const navigate = useNavigate();
    let location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const [token] = useToken(user || Guser)
    const { register, formState: { errors }, handleSubmit } = useForm();
    let from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }
    if (Gloading || loading ) {
        return <div className='d-flex justify-content-center align-items-center mt-5'>
            <Spinner animation="grow" variant="light" />  </div>

    }
    let allError;

    //errors with conditonal statement
    if (error || Gerror) {
        allError = <p className='text-danger'>Error: {error?.message} {Gerror?.message} </p>
    }
    if (token || user || Guser) {
        navigate(from, { replace: true });
    };


    return (
        <div>
            <div style={{ backgroundColor: 'rgb(50, 48, 48)' }} className='w-25 p-5 shadow-lg mx-auto mt-5 rounded mb-5'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <label for="exampleInputEmail1" class="form-label text-white fw-bold">Enter Email</label>
                        <Form.Control ref={emailValue} type="email" placeholder='Enter Email'
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label>
                            {errors.email?.type === 'required' && "First name is required" && <span className='text-danger'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && "First name is required" && <span className='text-danger'>{errors.email.message}</span>}
                        </label>
                    </div>
                    <div >
                        <label for="exampleInputPassword1" class="form-label text-white fw-bold mt-2">Enter Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter Password'
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label>
                            {errors.password?.type === 'required' && "First name is required" && <span className=' text-danger'>{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && "First name is required" && <span className=' text-danger'>{errors.password.message}</span>}
                        </label>
                    </div>
                    {allError}
                    <input style={{ backgroundColor: '#FF3117' }} className='btn mt-2 text-white fw-bold w-100' type="submit" value='Log In' />
                    <p className='text-white mt-3'>New to Car Parts House? <Link to='/signup' style={{ color: '#FF3117' }} className='text-decoration-none fw-bold'>Please Sign Up </Link></p>
                </form>
                <div className='conainer '>
                    <div className='d-flex align-items-center'>
                        <div style={{ height: '1px' }} className='bg-light w-50'></div>
                        <p className='mt-2 px-2 text-white'>Or</p>
                        <div style={{ height: '1px' }} className='bg-light w-50'></div>
                    </div>
                    <button className='btn text-center w-100 bg-light fw-bold socialLogin' onClick={() => signInWithGoogle()}> <img width='30px' src={googleLogo} alt="" /> Sign In With Google</button><br />
                </div>
            </div>
        </div>
    );
};

export default Login;