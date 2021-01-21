import React, { useState, useEffect } from 'react'
import Skill from './skill'
import initialList from '../../data/skill'
import './skills.scss'

// console.clear()

const Skills = () => {
  const [list, setList] = useState(initialList)

  useEffect(() => {}, [])

  const setActive = (arg) => {
    // eslint-disable-next-line no-console
    console.log(list)
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
    <section className="skills">
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
    </section>
  )
}

export default Skills