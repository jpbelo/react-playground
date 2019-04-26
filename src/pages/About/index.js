import React, { Component, Fragment } from 'react'

import Button from '../../components/Button'

class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <h1>About!</h1>
        <Button width={200}>
          Button
        </Button>
        <Button secondary>
          Secondary Button
        </Button>
        <Button disabled>
          Disabled Button
        </Button>
      </Fragment>
    )
  }
}

export default AboutPage
