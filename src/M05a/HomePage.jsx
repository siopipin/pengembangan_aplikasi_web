import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

function HomePage() {
    const { email } = useParams()
  return (
    <div>
      <h1>Welcome {email}</h1>
      <Link to='profile'><span>Profile   </span></Link>
      <Link to='qna'><span>QnA</span></Link>
      <Outlet />
    </div>
  )
}

export default HomePage
