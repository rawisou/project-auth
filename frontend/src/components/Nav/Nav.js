import React from 'react'
import { useNavigate } from 'react-router'

import './Nav.css'

const Nav = () => {
  const navigate = useNavigate()
  return (
    <nav>
    <ul>
        <li><a className="activ" href="#">About</a></li>
        <li><a class="activ" href="#">Bookshelf</a></li>
        <li><a href="#">Newsletters</a>
            <ul>
                <li><a href="#">News #1</a></li>
                <li><a href="#">News #2</a></li>
                <li><a href="#">News #3</a></li>
            </ul>
        </li>
        <li><a className='signout' href="#" onClick={() => {
          sessionStorage.clear()
          navigate("/login")
        }}>SIGN OUT</a></li>
    </ul>
</nav>
  )
}

export default Nav