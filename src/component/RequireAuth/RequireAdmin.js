import { signOut } from 'firebase/auth';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hook/useAdmin';

const RequireAdmin = ({ children }) => {
    const [user, loading1] = useAuthState(auth);
    const [admin, loading] = useAdmin(user)
    let location = useLocation();
    if (loading1 || loading) {
        return <div className='d-flex justify-content-center align-items-center mt-5'>
            <Spinner animation="grow" variant="light" />
        </div>
    }
    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};


export default RequireAdmin;