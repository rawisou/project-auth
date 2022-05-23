import React from 'react'
import { Link } from 'react-router-dom';
import { singInWithGoogle } from '../services/firebase'


const LoginArea = () => {
  return (
    <section className='register-wrapper'>
    <img className='logo' src='./images/logo.svg' alt='logo' />
    <img className='bookshelf' src='./images/bookshelf.svg' alt='bookshelf' />
    <form className='register-form'>
        <label htmlFor="signup-form"></label>
        <p className='create-account-text'>Create a free account to connect with thousands of readers</p>
        <input type='text' placeholder='Email address or username' required/>
        <input type='password' placeholder='Password' required/>
        <button type='submit'>Sign in</button>
    </form>
    <p>OR</p>
    <button type='submit' className='signin-with-google'>Sign in with Google</button>
    <p>Don't have an account? <span className='to-signin-page'>  <Link
            to={"/signup"}
            rel="noopener noreferrer"
          >Sign up </Link></span></p>
</section>
  )
}

export default LoginArea