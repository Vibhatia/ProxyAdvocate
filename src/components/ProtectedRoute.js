import React from 'react'
import {Navigate} from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
const ProtectedRoute = ({component:component}) => {
    const {user} = useUserAuth();
    // const {user} = useUserAuth();
    console.log(user);
    // const isAuthenticated=user?true:false;
    // console.log(isAuthenticated);
    if(!user){
        return(
            <div>
                <h1>You are not autheticated to this page!!! Please Login your account</h1>
            </div>
        )
    }
    
    return component;  
    
};

export default ProtectedRoute
