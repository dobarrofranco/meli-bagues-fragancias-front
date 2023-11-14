import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/LOGO.jpg'
import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={style.navContainer}>
            <NavLink to={'/'}>
                <img className={style.logoNav} src={logo} alt="Logo" />
            </NavLink>

            <div className={style.navBar}>
                <h1 className={style.navText}>Contacto</h1>
                <h1 className={style.navText}>Nosotros</h1>
            </div>

        </div>
    )
}

export default NavBar