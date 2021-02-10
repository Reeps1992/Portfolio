/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import './navbar.scss'

const NavBar = () => {
  const location = useLocation()

  const body = document.getElementsByTagName('body')
  const html = document.getElementsByTagName('html')

  const setTheme = () => {
    body[0].classList.toggle('dark')
  }

  const toggleMenu = () => {
    const cWidth = body[0].clientWidth
    const menu = document.querySelector('.direction')
    const fixed = document.querySelector('.fixed')
    const menuBtn = document.querySelector('.menu-btn')
    const bar = document.querySelector('.bar')
    const navBtn = document.querySelectorAll('.direction__btn')
    if (cWidth <= 425) {
      fixed.classList.toggle('grow')
    }
    menu.classList.toggle('direction-open')
    menuBtn.classList.toggle('menu-btn-open')
    bar.classList.toggle('bar-open')
    navBtn.forEach(btn => {
      btn.classList.toggle('direction__btn-open')
    })
  }

  return (

    <div className='fixed' >
      <div className="direction">

          <button 
            className='menu-btn' 
            type='button'
            onClick={() => toggleMenu()}
          >
            <div className='bar'></div>
          </button>

          <div className="toggle-dark">  
            <input type="checkbox" id="dark" onClick={() => setTheme()} />
        </div>

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
    </div>
  )
}

export default NavBar
