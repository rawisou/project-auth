import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'


const LoginArea = () => {
  const [emailOrUsernameInput, SetEmailOrUsernameInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [usernameInput, setUsernameInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")

  const navigate = useNavigate()

  const isUsernameOrEmail = () => {
      // Check if email
      if (/\@/.test(emailOrUsernameInput)) {
         setEmailInput(emailOrUsernameInput)
      }
      else {
          setUsernameInput(emailOrUsernameInput)
      }
  }
  const onLogInSubmit = (event) => {
    event.preventDefault()
    // isUsernameOrEmail()
    const options = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          // email: emailInput,
          username: usernameInput,
          password: passwordInput
      })
  }
  fetch("http://localhost:8080/signin", options)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("Authorization", data.accessToken)
        // setCurrentUser(data.username)
        navigate("/memberzone") }
        )
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
         onChange={(event) => setUsernameInput(event.target.value)} 
         required/>
        <input 
         type='password' 
         placeholder='Password' 
         onChange={(event) => setPasswordInput(event.target.value)} 
         required/>
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