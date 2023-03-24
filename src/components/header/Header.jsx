import React from 'react'
import { NavLink } from 'react-router-dom'
import LOGO from '../../assets/LOGO.svg'
import './Header.css'

function Header() {
  return (
    <header>
      <div className="logoHeader">
        <img src={LOGO} alt="logo de Kasa" />
      </div>
      <nav className="navHeader">
        <ul>
          <li>
            <NavLink
              activeclasscname={'active'}
              className="linkHeader"
              to="/home"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              activeclassname={'active'}
              className="linkHeader"
              to="/about"
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
