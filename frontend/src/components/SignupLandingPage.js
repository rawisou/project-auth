import React from 'react'
import { Link } from 'react-router-dom'

const SignupLandingPage = () => {
    return (
        <section className='to-center'>
            <img className='logo-large' src='./images/logo.svg' alt='logo' />
            <h2>Your account has successfully been created. Please click   
                <Link
                to={"/login"}
                rel="noopener noreferrer"
            > here </Link>  to login.</h2>
        </section>
    )
}

export default SignupLandingPage