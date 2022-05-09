import React from 'react'

const LoginArea = () => {
  return (
    <section className='register-wrapper'>
    <img className='logo' src='./images/logo.svg' alt='logo' />
    <form className='register-form'>
        <label htmlFor="signup-form"></label>
        <p className='create-account-text'>Create a free account to connect with thousands of readers</p>
        <input type='text' placeholder='Email address or username' required/>
        <input type='password' placeholder='Password' required/>
        <button type='submit'>LOGIN</button>
    </form>
    <p>Already have an account? <span className='to-signin-page'>Sign in</span></p>
</section>
  )
}

export default LoginArea