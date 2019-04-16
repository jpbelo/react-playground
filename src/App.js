import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import Layout from './components/Layout'
import Header from './components/Header'
import HomePage from './pages/Home'
import AboutPage from './pages/About'

import './App.css'

const styleAtEnter = {
  opacity: 0,
}
const styleAtLeave = {
  opacity: 0,
}
const styleAtActive = {
  opacity: 1,
}

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header />
          <AnimatedSwitch
            atEnter={styleAtEnter}
            atLeave={styleAtLeave}
            atActive={styleAtActive}
            className="switch-wrapper"
          >
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
          </AnimatedSwitch>
        </Layout>
      </Router>
    )
  }
}

export default App
