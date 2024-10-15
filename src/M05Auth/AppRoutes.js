import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import { isAdmin, isAuthenticated } from './auth'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

const AuthGuard = ({element, adminOnly = false}) => {
    if(!isAuthenticated()) {
        return <Navigate to='/login' />
    }

    if(adminOnly && !isAdmin()) {
        return <Navigate to='/home' />
    }

    return element;
}

function AppRoutes() {
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element= {<AuthGuard element={<Home />} />} />
        <Route path='/dashboard' element={<AuthGuard element={<Dashboard />} adminOnly={true} />}/>
        <Route path='/' element={<Navigate to='/home' />} />
    </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes
