import React from 'react'
import styleButton from '../styles/button.module.css'

function Button({title, onClick}) {
  return (
    <div>
      <button className={styleButton.button} onClick={onClick} >{title}</button>
    </div>
  )
}

export default Button
