import React from 'react'

function Paragraf({title, umur}) {
  return (
    <div>
      <p>{title}</p>
      <p>umur: {umur}</p>
      <hr />
    </div>
  )
}

export default Paragraf
