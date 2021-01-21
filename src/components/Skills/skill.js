import React from 'react'
import PropTypes from 'prop-types'

const Skill = ({ elt, setActive }) => {
  const name = elt.name.charAt(0).toUpperCase() + elt.name.slice(1)

  const handleClick = (e) => {
    setActive(e.target)
  }

  if (elt.active) {
    return <p onClick={(e) => handleClick(e)}>{name}</p>
  }
  if (!elt.active) {
    return <p onClick={(e) => handleClick(e)}>{name}</p>
  }
}

Skill.propTypes = {
  elt: PropTypes.object.isRequired,
  setActive: PropTypes.func.isRequired,
}

export default Skill
