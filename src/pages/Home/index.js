import React, { Component, Fragment } from 'react'

import Button from '../../components/Button'
import AnchorLink from '../../components/AnchorLink'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello World!</h1>
        <p>This is a react webapp to serve as a collection of some exercices to keep as notes for future reference.</p>
        <Button>
          asd
        </Button>
        <AnchorLink to="about" showAsButton disabled>
          link
        </AnchorLink>
        <AnchorLink to="about">
          link as button
        </AnchorLink>
      </Fragment>
    )
  }
}

export default HomePage
