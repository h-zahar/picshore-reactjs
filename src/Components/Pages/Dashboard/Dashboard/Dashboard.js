import React from 'react';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../../../Shared/Header/Header';
import DashHeader from '../DashHeader/DashHeader';
import DashHome from '../DashPages/DashHome/DashHome';
import UploadImage from '../DashPages/UploadImage/UploadImage';
import MyImages from '../DashPages/MyImages/MyImages/MyImages';
import Profile from '../DashPages/Profile/Profile';
import AllImages from '../DashPages/AllImages/AllImages/AllImages';
import MakeAdmin from '../DashPages/MakeAdmin/MakeAdmin';
import AdminRoute from '../../AdminRoute/AdminRoute';

const Dashboard = () => {
    const { path, url } = useRouteMatch();
    return (
        <div style={{minHeight: '50vh'}}>
            <Header />
            <DashHeader url={url} />

            <Switch>

                <Route exact path={`${path}`}>
                <DashHome />
                </Route>

                <Route exact path={`${path}/upload`}>
                    <UploadImage />
                </Route>

                <Route exact path={`${path}/my-images`}>
                    <MyImages />
                </Route>

                <Route exact path={`${path}/all-images`}>
                    <Profile />
                </Route>

                {/* <AdminRoute exact path={`${path}/profile`}> */}
                <Route exact path={`${path}/profile`}>
                    <AllImages />
                </Route>
                {/* </AdminRoute> */}

                {/* <AdminRoute exact path={`${path}/make-admin`}> */}
                <Route exact path={`${path}/make-admin`}>
                    <MakeAdmin />
                </Route>
                {/* </AdminRoute> */}

                <AdminRoute exact path={`${path}/make-admin`}>
                    <MakeAdmin />
                </AdminRoute>
            </Switch>

        </div>
    )
}

export default Dashboard;