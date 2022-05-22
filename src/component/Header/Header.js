import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from '../../images/icon.jpg'
import './Header.css'

const Header = () => {
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='text-white fw-bold fs-2 d-flex justify-content-center align-items-center' href="#home">
                    <img
                        alt=""
                        src={icon}
                        width="40"
                        height="40"
                        className="d-inline-block align-top me-2"
                    />{' '}
                    Car <span className='ms-2 me-2' style={{ color: "#FF3117" }}>Parts</span> House
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} className="fs-5 fw-bold nav-element text-muted" to="/">Home</Nav.Link>
                        <Nav.Link as={Link} className="fs-5 fw-bold nav-element text-muted" to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} className="fs-5 fw-bold nav-element text-muted" to="/dashboard">Dashboard</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;