import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import Layout from './components/Layout'
import Header from './components/Header'
import Home from './components/Home'
import ListFetch from './components/ListFetch'
import LodashExemples from './components/LodashExemples'
import StyledComponents from './components/StyledComponents'
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
            <Route path="/" exact component={Home} />
            <Route path="/list-fetch" component={ListFetch} />
            <Route path="/lodash-exemples" component={LodashExemples} />
            <Route path="/styled-components" component={StyledComponents} />
          </AnimatedSwitch>
        </Layout>
      </Router>
    )
  }
}

export default App
