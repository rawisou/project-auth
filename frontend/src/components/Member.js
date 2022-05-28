import React, { useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from 'App';

const Member = () => {
  let accessToken = sessionStorage.getItem("accessToken")
  const navigate = useNavigate()

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [])

  return (
    <section className='container'>
      <h1>Hello !</h1>
      <div> <img src='./images/reader.png' alt='sign out' /> <p>Sign out</p></div>
      <div> <p>Suggest a book</p> </div>
      <div> <p>Your bookshelf</p> </div>
      <div> <p>Events</p> </div>
      <button
        onClick={() => {
          sessionStorage.clear()
          navigate("/login")
        }}></button>
    </section>
  )
}

export default Member