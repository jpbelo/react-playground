import React, { Component, Fragment } from 'react'
import _ from 'lodash';

class LodashExemples extends Component {
  render() {
    return (
      <Fragment>
        <h1>Lodash exemples</h1>
        <p>{_.dropRight([1, 2, 3, 4, 5], 2).map(each => `${each}`)}</p>
      </Fragment>
    )
  }
}

export default LodashExemples
