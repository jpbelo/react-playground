import React, { Component, Fragment } from 'react'
import { LoginForm } from '../../components/AccountForms'

class LoginPage extends Component {
  render() {
    return (
      <Fragment>
        <h1>Login</h1>
        <LoginForm/>
      </Fragment>
    )
  }
}

export default LoginPage
