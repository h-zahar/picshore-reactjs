import React from 'react';
import useAuth from '../../../../../Hooks/useAuth';

const DashHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <p className="pt-5 text-center fs-5">Hey <span className="text-success">{user?.displayName}!</span></p>
            <h2 className="pb-5 text-center">Welcome to Your Dashboard</h2>
    </div>
    )
}

export default DashHome;