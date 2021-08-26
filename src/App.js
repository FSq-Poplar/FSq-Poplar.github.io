import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Transition, TransitionGroup } from 'react-transition-group'
import './index.css'
import './App.css'

import Home from './Views/Home'
import Hackathons from './Views/Hackathons'
import FPGANN from './Views/FPGANN'
import WaveFormJS from './Views/WaveFormJS'
import MiniProjects from './Views/Miniprojects'
import { play, exit } from './Animations/Play'
import Banner from './Components/Banner'

export default class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <Banner />
          <Route render={({ location }) => {
            const { pathname, key } = location
            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{ enter: 750, exit: 150 }}
                >
                  <Switch location={location}>
                    <Route exact path='/' component={Home} />
                    <Route path='/hackathons' component={Hackathons} />
                    <Route path='/fpgann' component={FPGANN} />
                    <Route path='/waveformjs' component={WaveFormJS} />
                    <Route path='/miniprojects' component={MiniProjects} />
                  </Switch>
                </Transition>
              </TransitionGroup>
            )
          }}
          />
        </div>
      </BrowserRouter>
    )
  }
}
