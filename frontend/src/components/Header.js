import React, { useState } from 'react'
import './Header.css'

import { FaBars } from 'react-icons/fa';

export default function Header() {
    const [isOpen, setisOPen] = useState(false)

    const hamburgerEventHandler = () => {
        setisOPen(!isOpen)
    }

    return (
        <header>

            <a href="#" className="logo"><span>BIN</span>GEE</a>

            <div id="menu" className="fas fa-bars" onClick={hamburgerEventHandler}><FaBars /></div>

            <nav className={`navbar ${isOpen ? 'nav-toggle' : ''}`}>
                <ul>
                    <li><a className="active" href="#home">home</a></li>
                    <li><a href="#gallery">gallery</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#movies">movies</a></li>
                    <li><a href="#product">product</a></li>
                </ul>
            </nav>
        </header>
    )
}
