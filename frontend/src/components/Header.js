import React, { useState } from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

import { FaBars } from 'react-icons/fa';

export default function Header() {
    const [isOpen, setisOPen] = useState(false)

    const hamburgerEventHandler = () => {
        setisOPen(!isOpen)
    }

    return (
        <header>

            <Link to="/" className="logo">BINGEE</Link>

            <div id="menu" className="fas fa-bars" onClick={hamburgerEventHandler}><FaBars /></div>

            <nav className={`navbar ${isOpen ? 'nav-toggle' : ''}`}>
                <ul>
                    <li><NavLink to="/" exact>home</NavLink ></li>
                    <li><NavLink to="/movies">movies</NavLink ></li>
                    <li><NavLink to="/tv">tV shows</NavLink ></li>
                    <li><NavLink to="/search/movies">search</NavLink ></li>
                    <li><NavLink to="/account">profile</NavLink ></li>
                </ul>
            </nav>
        </header>
    )
}
