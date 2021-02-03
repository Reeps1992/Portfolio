import React from 'react'
import { Icon } from 'semantic-ui-react'
import './home.scss'

const Home = () => (
  <section className="home">
    <div className="presentation">
      <div className="presentation__title">
        <h1>
          KEVIN <br />
          CONVERSIN
        </h1>
      </div>
      <div className="presentation__desc" >
        <p>
          Bonjour et bienvenue !
          <br/>
          Ceci est mon portfolio. Je vous partage ici mes projets et mes compétences.
        </p>
      </div>

      <div className="presentation__text">
        <p id="job">Web Developper</p>
        <p><Icon name="map marker alternate" /> Rennes & Saint-Malo, France</p>
      </div>
    </div>

    <div className="socials">
      <a
        className="socials__github"
        href="https://github.com/Reeps1992"
        target="_blank"
        rel="noreferrer"
        alt="GitHub_link_kevin_converin"
      >
        <Icon size="huge" name="github" />
      </a>

      <a
        className="socials__linkedin"
        href="www.linkedin.com/in/kevin-conversin"
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
