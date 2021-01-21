import React from 'react'

// import Components
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import NotFound from './components/NotFound'
import NavBar from './components/NavBar'

// import CSS
import 'semantic-ui-css/semantic.min.css'
import './App.scss'

// import Bundles
import { Route, Switch, useLocation } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const App = () => {
  const location = useLocation()

  return (
    <div className="App">
      <NavBar />
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={location.pathname}
          addEndListener={(node, done) =>
            node.addEventListener('transitionend', done, false)
          }
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
            <Route component={NotFound} />
          </Switch>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default App
