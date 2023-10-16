import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const AdminAuth = () => {
    const token = localStorage.getItem('Token');
    const userEmail = localStorage.getItem('xuserEmail');

    if (token) {
        if (userEmail === 'admin@gmail.com') {
            return <Outlet />;
        } else {
           
            return <Navigate to='/unauthorized' />;
        }
    } else {
       
        return <Navigate to='/loginn' />;
    }
};