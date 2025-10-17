import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const { nama } = useParams()
  return (
    <div style={{backgroundColor: 'red', color: 'white'}}>
      <p>Profile</p>
      <i>{nama}</i>
    </div>
  )
}

export default Profile
