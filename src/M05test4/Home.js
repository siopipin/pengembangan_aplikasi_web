import React, { useEffect, useState } from 'react'

function Home() {
  const [nilai, setNilai] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setNilai("Welcome to Home")
    }, 3000)
    
  }, [])

  return (
    <div>
       {isLoading ? <h1>Loading...</h1> : <h1>{nilai}</h1>}
    </div>
  )
}

export default Home
