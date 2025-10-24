import React from 'react'
import ButtonField from './components/ButtonField'
import { useNavigate } from 'react-router-dom'

function HomeA() {
  const navigate = useNavigate() 
  function handleLogout() {
    navigate('/')
  }
  return (
    <div>
      <ButtonField title="Logout" onclick={handleLogout} />
    </div>
  )
}

export default HomeA
