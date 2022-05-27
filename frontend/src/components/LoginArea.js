import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { AuthContext } from 'App';


const LoginArea = () => {
  const [loginInput, setLoginInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [auth, setAuth] = useState(true)
  // const { currentUser, setCurrentUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const onLoginValueChange = (event) => {
    setLoginInput(event.target.value)
    setAuth(true)
  }

  const onPasswordValueChange = (event) => {
    setPasswordInput(event.target.value)
    setAuth(true)
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

    fetch("http://localhost:8080/signin", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("accessToken", data.accessToken)
          navigate("/memberzone")
        } else {
          localStorage.setItem("accessToken", null)
          setAuth(false)
        }
      })
  }

  return (
    <section className='main-wrapper'>
      <img className='logo' src='./images/logo.svg' alt='logo' />
      <img className='bookshelf' src='./images/bookshelf.svg' alt='bookshelf' />
      <form className='register-form' onSubmit={onLogInSubmit}>
        <label htmlFor="signup-form"></label>
        <p className='create-account-text'>Create a free account to connect with thousands of readers</p>
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
          <div className={`${auth ? "auth" : "not-auth"}`}><p>Incorrect username, email or password.
            Please try again.</p></div>
        <button type='submit'>Sign in</button>
      </form>
      <p className='horizontal-line'><span>OR</span></p>
      <button type='submit' className='signin-with-google'>Sign in with Google</button>
      <p>Don't have an account? <span className='to-signin-page'>  <Link
        to={"/signup"}
        rel="noopener noreferrer"
      >Sign up </Link></span></p>
    </section>
  )
}

export default LoginArea