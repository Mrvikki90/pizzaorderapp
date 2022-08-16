import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const Privatecomponent = () => {

    const auth = localStorage.getItem('auth');
    return auth ? <Outlet/> : <Navigate to = "/"/>
    
}
