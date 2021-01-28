import React, { useState } from 'react'
import Project from './project'
import './project.scss'
import projects from '../../data/project.js'
import { Icon } from 'semantic-ui-react'

const Projects = () => {
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState(projects)

  return (
    <div className="projects">
      <div className="projects__txt" >
        <p><span className="letter" >L</span>ors de mes formations, à la <span className="bolder" >3W Academy</span> puis chez <span className="bolder" >O&apos;clock</span>, j&apos;ai réalisé quelques pages pour mes projects de fin de formation.
        <br/>Vous avez directement accès aux pages et aux repository GitHub, sauf exeptions.
        </p>
        <p>Je serais ravi d&apos;avoir vos retours et conseils afin de progresser ! <a className="bolder" href="https://www.linkedin.com/in/kevin-conversin-06a510182/" target="_blank" rel="noreferrer"><Icon name="linkedin" /></a></p>
        <p>C&apos;est ici aussi que je vous partagerai mes futurs projets.</p>
      </div>
      <div className="projects__content" >
        {list.map((elt) => (
          <Project className="project" key={elt.name} elt={elt} />
        ))}
      </div>
    </div>
  )
}

export default Projects
