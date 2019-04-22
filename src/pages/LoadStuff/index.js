import React, { Component, Fragment } from 'react'

import Button from '../../components/Button'
import ListFetch from '../../components/ListFetch'

class LoadStuffPage extends Component {
  render() {
    return (
      <Fragment>
        <h1>Load Stuff!</h1>
        <Button>
          PIM
        </Button>
        <ListFetch />
      </Fragment>
    )
  }
}

export default LoadStuffPage
