import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from './Profile'
import HomePage from './HomePage'
import QnA from './QnA'
import LoginPage from './LoginPage'

function Dashboard() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/dashboard/:email' element={<HomePage />}>
        <Route path='profile' element={<Profile />} />
        <Route path='qna' element={<QnA />} />
      </Route>
      <Route path='/profile/:nama' element={<Profile />} />
    </Routes>
  )
}

export default Dashboard
