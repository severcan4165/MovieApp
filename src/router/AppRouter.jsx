import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NavBar from '../components/NavBar'
import Login from '../pages/Login'
import Register from '../pages/Register'

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  
  )
}

export default AppRouter