import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import ProtectedRoutes from '../components/ProtectedRoutes';
import SecretPage from '../components/SecretPage';
import PageNotFound from '../pages/PageNotFound';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

      <Route element={<ProtectedRoutes/>} >
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/secret" element={<SecretPage/>}/>
      </Route>

      <Route path="*" element={<PageNotFound/>}/>

    </Routes>
  )
}

export default AllRoutes