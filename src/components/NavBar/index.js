/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import './navbar.scss'

const NavBar = () => {
  const location = useLocation()

  const [ open, setOpen ] = useState(false);
  
  const toggleMenu = () => {
    const menu = document.querySelector('.direction')
    const menuBtn = document.querySelector('.menu-btn')
    const bar = document.querySelector('.bar')
    const navBtn = document.querySelectorAll('.direction__btn')
    menu.classList.toggle('direction-open')
    menuBtn.classList.toggle('menu-btn-open')
    bar.classList.toggle('bar-open')
    navBtn.forEach(btn => {
      btn.classList.toggle('direction__btn-open')
    })
  }

  return (
    <div className="direction">
        <button 
          className='menu-btn' 
          type='button'
          onClick={() => toggleMenu()}
        >
          <div className='bar'></div>
        </button>
        <div className="direction__btn">
          <NavLink
            className="direction__btn__link"
            to="/"
            activeClassName={location.pathname !== '/' ? null : 'nav__active'}
          >
            <p className="direction__btn__link-p">Home</p>
            <Icon className="direction__btn__link-icon" name="home" />
          </NavLink>
        </div>
        <div className="direction__btn">
          <NavLink
            className="direction__btn__link"
            to="/skills"
            activeClassName="nav__active"
          >
          <p className="direction__btn__link-p">Skills</p>
            <Icon className="direction__btn__link-icon" name="file code" />
          </NavLink>
        </div>
        <div className="direction__btn">
          <NavLink
            className="direction__btn__link"
            to="/projects"
            activeClassName="nav__active"
          >
            <p className="direction__btn__link-p">Projects</p>
            <Icon className="direction__btn__link-icon" name="tv" />
          </NavLink>
      </div>
    </div>
  )
}

export default NavBar
