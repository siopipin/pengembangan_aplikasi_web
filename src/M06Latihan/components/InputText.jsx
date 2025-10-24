import React from 'react'
import styleInput from '../styles/input.module.css'

function InputText({type, placeholder}) {
  return (
    <div>
      <input className={styleInput.textInput} type={type} placeholder={placeholder} />
    </div>
  )
}

export default InputText
