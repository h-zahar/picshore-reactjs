import React from 'react';
import useAuth from '../../../../../Hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();
    return (
        <div>
            <div className="container">
                <div className="w-100 text-center d-flex flex-column align-items-center">
                    <div style={{maxWidth: '150px'}} className="mt-5 mb-4 mx-auto">
                        {
                            user?.photoURL ?
                            <div className="w-100 d-flex justify-content-center">
                               <img className="w-100 rounded-circle" src={user?.photoURL} alt="" />
                            </div> :
                            <div style={{width: '50px', height: '50px', borderRadius: '50px', border: '1px solid rgba(0, 0, 0, 0.5)', padding: '38px'}} className="d-flex justify-content-center align-items-center">
                                <i className="fas fa-user fs-1"></i>
                            </div>
                        } 
                    </div>
                    <h2>{user?.displayName}</h2>
                    <h5 className="my-3">{user?.email}</h5>
                </div>
            </div>
        </div>
    )
}

export default Profile;