import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { formatDistance } from 'date-fns'

import CurrrentBook from 'components/CurrentBook/CurrrentBook'
import Nav from 'components/Nav/Nav'

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
      .then((data) => setMemberSince(formatDistance(new Date(data.memberSince), Date.now(), {
        addSuffix: true,
    })))
  }, []);


  return (
    <>
      <Nav/>
      <section className='container large'>
      <h3>{`Hello ${username} !`}  <img className='reading-icon' src='./images/reader.png' alt='sign out' /></h3>
      <p>{`Member since ${memberSince}`}</p>
      <h4>Current book discussion</h4>
        <CurrrentBook/>
      <p>Our next book discussion is on August 10th, 2022</p>
      <button
        className='suggest-btn'
       ><a href='https://libertasbookclub.netlify.app'>Suggest a book</a></button>
    </section>
    </>
  )
}

export default Member