import React from 'react'
import styleKetik from '../../M06Latihan/styles/input.module.css'

function InputField({type, place}) {
  return (
    <div>
      <input className={styleKetik.textInput}  type={type} placeholder={place} />
    </div>
  )
}

export default InputField
