import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';
import Profile from '../pages/Profile';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<ProtectedRoute component={Profile} />} />
        </Routes>
    );
};

export default Router;
