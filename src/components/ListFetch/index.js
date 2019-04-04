import React, { Fragment } from 'react'

import List from './List'
import './styles.css'

class ListFetch extends React.Component {

  state = {
    isLoading: true,
    people: []
  }

  componentWillMount(){
  	fetch('https://swapi.co/api/people')
      .then(resp => resp.json())
      .then(resp => this.setState({
        isLoading: false,
        people: resp.results
      }))
  }

  render() {
    return (
      <Fragment>
        <h2>List Fetch</h2>
        <List
          people={this.state.people}
          isLoading={this.state.isLoading}
          />
      </Fragment>
    )
  }
}

export default ListFetch
