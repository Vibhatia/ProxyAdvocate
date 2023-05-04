import React from 'react'
import { useUserAuth } from '../context/UserAuthContext';
import { useNavigate } from "react-router";
const Dashboard = () => {
    const {user,logOut} = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async()=>{
        try{
            await logOut();
            navigate("/");
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div>
      <h1>Hello {user && user.email}</h1>
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard;