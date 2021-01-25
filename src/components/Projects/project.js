import React from 'react'
import { Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

// images fixes

const Project = ({ elt }) => {
  const name = elt.name.charAt(0).toUpperCase() + elt.name.slice(1)

  return (
    <div className="card">

      <div 
        className='card__img'
      >
        <img
          src={elt.img}
          alt={elt.name}
        />
      </div>
      
    
      <div className='card__content' >
        <a className='card__content__title' href={elt.path} target='_blank' rel='noreferrer' >{name}</a>
        <p className='date'>Date : <span>{elt.date}</span></p>
        <p className='desc' >{elt.desc}</p>
        <a 
          className='gitrepo'
          href={elt.repo} target="_blank" rel="noreferrer">
            <Icon name="github" />
        </a>
      </div>

    </div>
  )
}

Project.propTypes = {
  elt: PropTypes.object.isRequired,
}

export default Project
