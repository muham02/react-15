import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import Home from '../home/Home'
const Private = () => {
    const auth = useSelector(state=>state);
    return auth.token? <Home/>:<Navigate to='/login'/>

}

export default Private