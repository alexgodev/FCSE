import React from 'react';
import PropTypes from 'prop-types';
import useAuthUser from '../hooks/useAuthUser';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: RouteComponent }) => {
    const { isAuth } = useAuthUser();

    if (isAuth) {
        return <RouteComponent />;
    }

    return <Navigate to="/" />;
};

ProtectedRoute.propTypes = {
    component: PropTypes.elementType,
};

export default ProtectedRoute;
