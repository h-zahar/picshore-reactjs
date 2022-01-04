import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const {user,logOut} = useAuth();
    const activeStyle = {
        color: "black",
        backgroundColor: "white",
        transition: ".5s ease-in",
        borderBottom: "1px solid red",
    };
    return (
        <div>
             <div>
            <div className="header">
                <div className="header-inner">
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark ms-auto">
                        <div className="container">
                            <NavLink className="navbar-brand fw-bold fs-3 text-warning" to="/home">picshore</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            {
                            user?.email ? <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " aria-current="page" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/bikes">Explore</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/about">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/contact">Contact Us</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/dashboard">Dashboard</NavLink>
                                </li>

                                <li className="nav-item">
                                    {/* <button onClick={logOut} className="btn btn-dark fs-6">Logout</button> */}
                                    <Button onClick={logOut} variant="outlined" color="error">Logout</Button>
                                </li>
                            </ul>
                                : <ul className="navbar-nav ms-auto">

                                    <li className="nav-item">
                                        <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " aria-current="page" to="/home">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/bikes">Explore</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/about">About Us</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/contact">Contact Us</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/login">Sign In <span><i className="fas fa-user"></i></span> </NavLink>
                                    </li>
                                </ul>
                        }   
                                <div className="text-center">
                                    <img className="img-fluid w-25 rounded-circle px-1" src={user?.photoURL} alt="" />
                                    <p className="text-info">{user?.displayName}</p>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;