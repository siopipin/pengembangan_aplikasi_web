import React from 'react'
import InputField from './components/InputField'
import ButtonField from './components/ButtonField'
import { useNavigate } from 'react-router-dom'

function LoginA() {
    const nav = useNavigate()

    function handleClick() {
        nav('/home')
    }

  return (
    <div>
      <InputField place="Isi Email" type="email" />
      <InputField place="Isi Password" type="password" />
      
      <ButtonField onclick={handleClick} title="Login" />
    </div>
  )
}

export default LoginA
