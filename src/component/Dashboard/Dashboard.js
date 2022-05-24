import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    return (
        <div  className="container-fluid">
            <div className='row'>
                <div class="col-md-3 col-lg-2 col-3 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: "#212529" }}>
                    <ul class="nav flex-column sticky-top pl-0 pt-5 mt-3 ">
                        <Nav class="nav-item mb-2 fs-5 fw-bold  text-muted "><Link to='/dashboard' class=" nav-element nav-link text-secondary">My Orders</Link></Nav>
                        <Nav class="nav-item mb-2 fs-5 fw-bold  text-muted "><Link to='/dashboard/review' class=" nav-element nav-link text-secondary">Add Review</Link></Nav>
                        <Nav class="nav-item mb-2 fs-5 fw-bold  text-muted"><Link to='/' class="nav-element nav-link text-secondary">My Profile</Link></Nav>
                    </ul>
                </div>

                <div className="text-white col-lg-10 col-md-9 col-9 w-75 mx-auto">
                    <Outlet></Outlet>

                </div>

            </div>
        </div>
    )
}

export default Dashboard;