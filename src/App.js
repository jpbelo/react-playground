import React, { Component } from 'react'

import ListFetch from './components/ListFetch'
import LodashExemples from './components/Lodash'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LodashExemples />
        <ListFetch />
      </div>
    )
  }
}

export default App
