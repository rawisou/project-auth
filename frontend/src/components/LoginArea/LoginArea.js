import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import "./LoginArea.css"

const LoginArea = () => {
  const [loginInput, setLoginInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [isCorrectCredentials, setIsCorrectCredentials] = useState(true)
  const [currentUser, setCurrentUser] = useState(null)

  const navigate = useNavigate()
  //Is there a way to combine/destructure these 2 functions?

  const onLoginValueChange = (event) => {
    setLoginInput(event.target.value)
    setIsCorrectCredentials(true)
  }

  const onPasswordValueChange = (event) => {
    setPasswordInput(event.target.value)
    setIsCorrectCredentials(true)
  }

  const isEmail = (str) => {
    // Check if email
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)) {
      return true
    }
    else {
      return false
    }
  }

  const onLogInSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    }

    const body =
    {
      password: passwordInput
    }

    if (isEmail(loginInput)) {
      body.email = loginInput
    } else {
      body.username = loginInput
    }
    options.body = JSON.stringify(body)

    fetch("https://libertas-auth.herokuapp.com/signin", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          sessionStorage.setItem("accessToken", data.accessToken)
          sessionStorage.setItem("username", data.username)
          setCurrentUser(true)
        } else {
          setIsCorrectCredentials(false)
        }
      })
  }

  if (!!currentUser) {
    return (<>
        <div class="progress-loader">
            <div class="progress"></div>
        </div>
        {setTimeout(() => {
            navigate("/member")
        }, 2000)}
    </>)
}

  return (
    <section className='main-wrapper'>
      <img className='logo' src='./images/logo.svg' alt='logo' />
      <img className='bookshelf' src='./images/bookshelf.svg' alt='bookshelf' />
      <form className='register-form' onSubmit={onLogInSubmit}>
        <label htmlFor="signup-form"></label>
        <p className='create-account-text'>Sign in to connect with thousands of readers</p>
        <input
          type='text'
          placeholder='Email address or username'
          onChange={onLoginValueChange}
          required />
        <input
          type='password'
          placeholder='Password'
          onChange={onPasswordValueChange}
          required />
        <div className={`${isCorrectCredentials ? "auth" : "not-auth"}`}><p>Incorrect username, email or password.
          Please try again.</p></div>
        <button type='submit'>Sign in</button>
      </form>
      {/* <p className='horizontal-line'><span>OR</span></p>
      <button type='submit' className='signin-with-google'>Sign in with Google</button> */}
      <p>Don't have an account? <span className='go-to-signin-page'>  <Link
        to={"/signup"}
        rel="noopener noreferrer"
      >Sign up </Link></span></p>
    </section>
  )
}

export default LoginArea