import React, { useState, useEffect } from 'react'
import Skill from './skill'
import initialList from '../../data/skill'
import './skills.scss'

// console.clear()

const Skills = () => {

  const [list, setList] = useState(initialList)

  useEffect(() => {}, [])

  const setActive = (arg) => {
    const target = arg.textContent.toLowerCase()
    const nextList = list.map((elt) => {
      if (elt.name !== target) {
        elt.active = false
      }
      if (elt.name === target) {
        elt.active = !elt.active
      }
      return elt
    })
    setList(nextList)
  }

  return (
    <div className="skills">

      <div className="skills__txt" >
        <p>Voici les différents langages, outils et librairies que j&apos;ai pu utiliser lors de mes formations.</p>
      </div>

      <div className="skills__content" > 

        <div className="skill">
          <h2>Languages</h2>
          {list.map((elt) => {
            if (elt.classification === 'language') {
              return <Skill className="skill__skill-elt" key={elt.name} elt={elt} setActive={setActive} />
            }
          })}
        </div>
        <div className="skill">
          <h2>Frameworks</h2>
          {list.map((elt) => {
            if (elt.classification === 'framework') {
              return <Skill className="skill__skill-elt" key={elt.name} elt={elt} setActive={setActive} />
            }
          })}
        </div>
        <div className="skill">
          <h2>Tools</h2>
          {list.map((elt) => {
            if (elt.classification === 'tool') {
              return <Skill className="skill__skill-elt" key={elt.name} elt={elt} setActive={setActive} />
            }
          })}
        </div>
        <div className="skill">
          <h2>Special</h2>
          {list.map((elt) => {
            if (elt.classification === 'special') {
              return <Skill className="skill__skill-elt" key={elt.name} elt={elt} setActive={setActive} />
            }
          })}
        </div>

      </div>

    </div>
  )
}

export default Skills
