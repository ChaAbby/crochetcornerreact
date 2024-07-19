import React, {useState} from 'react'

import {NavLink, Link} from 'react-router-dom'

import nav from "../styles.css"

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <Link to="/" className='title'>Crochet Corner</Link>
            <div className='menu' onClick={ () => {
                setMenuOpen(!menuOpen)
            }
            }>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="new_post"> Create New Post </NavLink>
                </li>
            </ul>
        </nav>
    )
}