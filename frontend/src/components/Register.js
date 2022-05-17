import React, { useState } from 'react'
import './Register.css'


const Register = () => {
    const [newUser, setNewUser] = useState({
        email: '',
        username: '',
        password: ''
    })

    const onNewUserChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        setNewUser((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <section className='register-wrapper'>
            <img className='logo' src='./images/logo.svg' alt='logo' />
            <form className='register-form'>
                <label htmlFor="signup-form"></label>
                <p className='create-account-text'>Create a free account to connect with thousands of readers</p>
                <input
                    type='text'
                    placeholder='Email address'
                    onChange={onNewUserChange}
                    value={newUser.email}
                    required
                />
                <input
                    type='text'
                    placeholder='Username'
                    onChange={onNewUserChange}
                    value={newUser.username}
                    required
                />
                <input
                    type='password'
                    placeholder='Password'
                    onChange={onNewUserChange}
                    value={newUser.password}
                    required
                />
                <button type='submit'>Create an account</button>
            </form>
            <p>Already have an account? <span className='to-signin-page'>Sign in</span></p>
        </section>
    )
}

export default Register