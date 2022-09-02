import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isLoggedIn] = useState(false);

    if(isLoggedIn) {
        return (
        <div>
            <ul>
                <li><NavLink className={({ isActive }) => isActive ? "selected" : ""} to='/profile'>Profile</NavLink ></li>
                <li><NavLink className={({ isActive }) => isActive ? "selected" : ""}  to='/logout'>Logout</NavLink ></li>
            </ul>
        </div>
        );
    }
  return (
    <div>
        <ul>
            <li><NavLink className={({ isActive }) => isActive ? "selected" : ""} to='/'>Home</NavLink ></li>
            <li><NavLink className={({ isActive }) => isActive ? "selected" : ""}  to='/about'>About</NavLink ></li>
            <li><NavLink className={({ isActive }) => isActive ? "selected" : ""}  to='/contact'>Contact</NavLink ></li>
            <li><NavLink className={({ isActive }) => isActive ? "selected" : ""}  to='/projects'>Projects</NavLink ></li>
        </ul>
    </div>
  )
}

export default Navbar