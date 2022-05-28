import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { formatDistance } from 'date-fns'

import "./Member.css"
const Member = () => {
  const [memberSince, setMemberSince] = useState("")
  let accessToken = sessionStorage.getItem("accessToken")
  let username = sessionStorage.getItem("username")
  const navigate = useNavigate()

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [])

  const options = {
    method: "GET",
    headers: { Authorization: accessToken },
  };

  useEffect(() => {
    fetch('http://localhost:8080/memberzone', options)
      .then((response) => response.json())
      .then((data) => setMemberSince(data.memberSince));
  }, []);


  return (
    <section className='container'>
      <h1>{`Hello ${username} !`}</h1>
      <p className='bolded'>Member since: {formatDistance(new Date(memberSince), Date.now(), {
                        addSuffix: true,
                    })} </p>
      <button
        onClick={() => {
          sessionStorage.clear()
          navigate("/login")
        }}>Sign out</button>
      <div> <img src='./images/reader.png' alt='sign out' /></div>
      <div> <p>Suggest a book</p> </div>
      <div> <p>Your bookshelf</p> </div>
      <div> <p>Events</p> </div>
    </section>
  )
}

export default Member