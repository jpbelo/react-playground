import React from 'react'
import LoadingHOC from '../LoadingHOC'
import Item from './Item'

class List extends React.Component {
  render() {
    return this.props.people.map(person => <Item {...person} />)
  }
}

export default LoadingHOC(List)
