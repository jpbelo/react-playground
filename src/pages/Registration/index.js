import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// import RegistrationForm from '../../components/RegistrationForm'

class RegistrationPage extends Component {
  render() {
    return (
      <Fragment>
        <h1>Registration</h1>
        {JSON.stringify(this.props.form)}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
  	form: state.form
  }
}

export default connect(mapStateToProps)(RegistrationPage)
