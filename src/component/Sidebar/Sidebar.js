import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const Sidebar = () => {
    return (

        <div class="col-md-3 col-lg-2 col-3 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: "#212529" }}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 mt-3 ">
                <Nav class="nav-item mb-2 fs-5 fw-bold  text-muted "><Link to='/order' class=" nav-element nav-link text-secondary">My Orders</Link></Nav>
                <Nav class="nav-item mb-2 fs-5 fw-bold  text-muted "><Link to='/myprofile' class=" nav-element nav-link text-secondary">Add A Review</Link></Nav>
                <Nav class="nav-item mb-2 fs-5 fw-bold  text-muted"><Link to='/' class="nav-element nav-link text-secondary">My Profile</Link></Nav>
            </ul>
        </div>
    )
};

export default Sidebar;