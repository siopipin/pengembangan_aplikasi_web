import React from 'react'

import styleTombol from '../../M06Latihan/styles/button.module.css'

function ButtonField({title, onclick}) {
  return (
    <div>
      <button className={styleTombol.button} onClick={onclick}>{title}</button>
    </div>
  )
}

export default ButtonField
