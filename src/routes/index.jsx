import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthRoute = () => {
    const token = Cookies.get('token');
    return token ? <Outlet /> : <Navigate to="/login" replace />;
};




export default AuthRoute;
