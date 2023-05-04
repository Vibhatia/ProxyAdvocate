import React from "react";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Otp from "./pages/Otp";
import Details from "./pages/Details";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Featured from "./components/Featured";
import Content from "./components/Content";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider ,useUserAuth } from "./context/UserAuthContext";
import ProtectedRoute from './components/ProtectedRoute'; 
import Dashboard from './components/Dashboard'; 


const App = () => {
  // const {user} = useUserAuth();
  // const isAuthenticated  = user?true:false;
  return (
    <BrowserRouter>
    <UserAuthContextProvider>
      <Routes>
        <Route path="/dashboard" element={<ProtectedRoute component={<Dashboard/>}></ProtectedRoute>}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/otp" element={<Otp />} />
        <Route path="/register/otp/details" element={<Details />} />
        
      </Routes>
    </UserAuthContextProvider>

    </BrowserRouter>
  );
};

export default App;
