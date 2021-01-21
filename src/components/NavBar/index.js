import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import './navbar.scss'

const NavBar = () => {
  const location = useLocation()

  return (
    <div className="direction">
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
