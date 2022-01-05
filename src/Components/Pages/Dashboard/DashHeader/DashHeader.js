import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const DashHeader = ({ url }) => {
    const { isAdmin, isAdminLoading } = useAuth();
    return (
        <div>
             <h2 style={{borderBottom: '1px solid rgba(255, 255, 255, 0.2)'}} className="text-center pt-3 pb-3 my-0 bg-light text-dark border"><Link style={{color: 'unset', textDecoration: 'unset'}} to={`${url}`}>
                {
                    isAdmin && !isAdminLoading &&
                    <span>Admin Board</span>
                }

                {
                    !isAdmin && !isAdminLoading &&
                    <span>Dashboard</span>
                }
            </Link></h2>

            <nav className="navbar navbar-expand-lg navbar-light bg-light border">
                <div className="container-fluid">
                    <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        {
                            !isAdminLoading &&
                            <NavLink className="nav-link" exact to={`${url}/upload`}>Upload Image</NavLink>
                        }

                        {
                            !isAdminLoading &&
                            <NavLink className="nav-link" exact to={`${url}/my-images`}>My Images</NavLink>
                        }

                        {
                            !isAdminLoading &&
                            <NavLink className="nav-link" exact to={`${url}/profile`}>Profile</NavLink>
                        }

                        {
                            !isAdminLoading &&
                            <NavLink className="nav-link" exact to={`${url}/all-images`}>All Images</NavLink>
                        }

                        {
                            isAdmin && !isAdminLoading &&
                            <NavLink className="nav-link" exact to={`${url}/make-admin`}>Make Admin</NavLink>
                        }

                    </div>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default DashHeader;