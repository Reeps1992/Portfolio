import React, { useState } from 'react'
import Project from './project'
import './project.scss'
import projects from '../../data/project.js'

const Projects = () => {
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState(projects)

  return (
    <div className="projects">
      {list.map((elt) => (
        <Project className="project" key={elt.name} elt={elt} />
      ))}
    </div>
  )
}

export default Projects
