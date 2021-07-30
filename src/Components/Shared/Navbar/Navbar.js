import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-5 pe-5">
                    <li className="nav-item active">
                        <Link className="nav-link ms-5" exact to='/'>Home <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link ms-5 " to='/dashboard'>Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5 " to='/appointment'>Appointment</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link ms-5 " to='/login'>Login</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-5 text-secondary" href="#">BLog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ms-5 text-secondary" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;