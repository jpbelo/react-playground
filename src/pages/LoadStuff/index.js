import React, { Component, Fragment } from 'react'

import ListFetch from '../../components/ListFetch'

class LoadStuffPage extends Component {
  render() {
    return (
      <Fragment>
        <h1>Load Stuff!</h1>
        <ListFetch />
      </Fragment>
    )
  }
}

export default LoadStuffPage
