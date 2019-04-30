import React, { Component, Fragment } from 'react'

import Button from '../../components/Button'
import Card from '../../components/Card'

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
        <Card
          title='Primary card'
          description='Card text - sizes [1, 2/3, 1/2, 1/3]'
          width={[1, 2/3, 1/2, 1/3]}
        />
      </Fragment>
    )
  }
}

export default AboutPage
