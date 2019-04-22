import React, { Component, Fragment } from 'react'

import RegistrationForm from '../../components/RegistrationForm'

class RegistrationPage extends Component {
  render() {
    return (
      <Fragment>
        <h1>Registration</h1>
        <RegistrationForm />
      </Fragment>
    )
  }
}

export default RegistrationPage
