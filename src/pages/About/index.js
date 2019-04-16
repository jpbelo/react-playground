import React, { Component, Fragment } from 'react'

import Button from '../../components/Button'

class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <h1>About!</h1>
        <Button>
          PTIU
        </Button>
        <Button
          options={{
          	type:'secondary',
          }}
         >
           POW
         </Button>
      </Fragment>
    )
  }
}

export default AboutPage
