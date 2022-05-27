import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from 'App';
import { useNavigate } from 'react-router';

const Register = () => {

    const navigate = useNavigate()

    const { currentUser, setCurrentUser } = useContext(AuthContext)
    const [newUser, setNewUser] = useState({
        email: "",
        username: "",
        password: ""
    })

    const onNewUserSubmit = (event) => {
        event.preventDefault()
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: newUser.email,
                username: newUser.username,
                password: newUser.password
            })
        }
        fetch("http://localhost:8080/signup", options)
            .then((res) => res.json())
            .then((data) => setCurrentUser(data.username))
    }

    const onNewUserValueChange = (event) => {
        const { name, value } = event.target
        setNewUser((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    if (!!currentUser) {

        return (<>
            <div class="progress-loader">
                <div class="progress"></div>
            </div>
            {setTimeout(() => {
                navigate("/signupsuccess")
            }, 2000)}
        </>)

    }
    return (
        <section className='main-wrapper'>
            <img className='logo' src='./images/logo.svg' alt='logo' />
            <img className='bookshelf' src='./images/bookshelf.svg' alt='bookshelf' />
            <form className='register-form' onSubmit={onNewUserSubmit}>
                <label htmlFor="signup-form"></label>
                <p className='create-account-text'>Create a free account to connect with thousands of readers</p>
                <input
                    onChange={onNewUserValueChange}
                    type='email'
                    placeholder='Email address'
                    value={newUser.email}
                    name="email"
                    required
                />
                <input
                    onChange={onNewUserValueChange}
                    type='text'
                    placeholder='Username'
                    value={newUser.username}
                    name="username"
                    required
                />
                <input
                    onChange={onNewUserValueChange}
                    type='password'
                    placeholder='Password'
                    value={newUser.password}
                    name="password"
                    required
                />
                <button
                    type='submit'
                >Create an account</button>
            </form>
            <p className='horizontal-line'><span>OR</span></p>
            <button type='submit' className='signin-with-google'>Sign up with Google</button>
            <p>Already have an account? <span className='to-signin-page'>
                <Link
                    to={"/login"}
                    rel="noopener noreferrer"
                >Sign in </Link> </span></p>
        </section>
    )
}

export default Register