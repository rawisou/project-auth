import React, { useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from 'App';


const SignupLandingPage = () => {

    const {currentUser} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (currentUser === null) {
            navigate("/signup");
        } 
    }, [])

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