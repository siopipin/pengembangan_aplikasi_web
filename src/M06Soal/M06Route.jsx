import React from 'react'
import { BrowserRouter, Route, Routers, Routes } from 'react-router-dom'
import LoginA from './LoginA'
import HomeA from './HomeA'

function M06Route() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginA />} />
            <Route path="/home" element={<HomeA />} />
        </Routes>
    </BrowserRouter>
  )
}

export default M06Route
