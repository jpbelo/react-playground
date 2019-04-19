import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import { ThemeProvider } from 'styled-components'

import Layout from './components/Layout'
import Header from './components/Header'
import HomePage from './pages/Home'
import AboutPage from './pages/About'

import theme from './theme'
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
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
