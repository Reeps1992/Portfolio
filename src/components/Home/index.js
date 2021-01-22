import React from 'react'
import { Icon } from 'semantic-ui-react'
import './home.scss'
import nom from '../../img/Nom_svg-green.png'

const Home = () => (
  <section className="home">
    <div className="presentation">
      <div className="presentation__photo" >
        <figure>
          <img src={nom} alt='kevin conversin web developper rennes saint malo name' />
        </figure>
      </div>
      <div className="presentation__text" >
        <p id="job">Web Developper</p>
        <p>Near Rennes & Saint-Malo, France</p>
      </div>
    </div>
    <div>
      <p id='green'>Work in progess ...</p>
      <p id='green'>Responsive coming soon ...</p>
    </div>
    <div className="socials">
      <a
        href="https://github.com/Reeps1992"
        target="_blank"
        rel="noreferrer"
        alt="GitHub_link_kevin_converin"
      >
        <Icon size="huge" name="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/kevin-conversin-06a510182/"
        target="_blank"
        rel="noreferrer"
        alt="LinkedIn_link_kevin_converin"
      >
        <Icon size="huge" name="linkedin" />
      </a>
    </div>
  </section>
)

export default Home
