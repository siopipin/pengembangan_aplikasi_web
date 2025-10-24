import React from 'react'
import  style  from './styles/login.module.css'
import InputText from './components/InputText'
import Button from './components/Button'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/home');
    }

  return (
    <div className={style.container}>
      {/* Form Input */}
      <InputText type="email" placeholder="Isi Email" />
      <InputText type="password" placeholder="Isi Password" />
      
      {/* Button */}
      <Button title="Login" onClick={handleClick} />
    </div>
  )
}

export default LoginPage
