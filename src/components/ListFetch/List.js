import React, { Fragment } from 'react'
import LoadingHOC from '../LoadingHOC'
import Item from './Item'

class List extends React.Component {
  render() {
    return (
      <Fragment>
        <h3>{this.props.people.length} results</h3>
        {this.props.people.map(person => (
          <Item {...person} />
        ))}
      </Fragment>
    )
  }
}

export default LoadingHOC(List)
