import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    // const closeMenu = () => setClick(false);
    
    return (
        <div className='header'>
            <nav className="navbar">
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/testimonials">Testimonials</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/demo">Demo</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
