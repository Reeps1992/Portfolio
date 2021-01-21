import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

// images fixes

const Project = ({ elt }) => {
  const name = elt.name.charAt(0).toUpperCase() + elt.name.slice(1)

  console.clear()

  return (
    <div className="project__card">
      <Card>
        <Image
          src={elt.img}
          alt={elt.name}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header><a href={elt.path} target='_blank' rel='noreferrer' >{name}</a></Card.Header>
          <Card.Meta>
            <span className="date">{elt.date}</span>
          </Card.Meta>
          <Card.Description>
            <p>{elt.desc}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={elt.repo} target="_blank" rel="noreferrer">
            <Icon name="github" />
            Repository
          </a>
        </Card.Content>
      </Card>
    </div>
  )
}

Project.propTypes = {
  elt: PropTypes.object.isRequired,
}

export default Project
