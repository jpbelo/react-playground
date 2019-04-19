import React, { Component, Fragment } from 'react'

import Button from '../../components/Button'

class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <h1>About!</h1>
        <Button>
          PIM
        </Button>
        <Button secondary>
           PAM
         </Button>
        <Button disabled>
           PUM
         </Button>
      </Fragment>
    )
  }
}

export default AboutPage
