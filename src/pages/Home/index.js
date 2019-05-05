import React, { Component, Fragment } from 'react'

import { H1, P } from '../../components/Text'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <H1>Hello World!</H1>
        <P>This is a react webapp to serve as a collection of some exercices to keep as notes for future reference.</P>
      </Fragment>
    )
  }
}

export default HomePage
