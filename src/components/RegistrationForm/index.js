import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'

import { SubmitInput, TextInput } from '../Inputs'

const StyledForm = styled.form`
  border: 1px solid black;
`

const RegistrationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = this.props
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Field
        name="firstName"
        component="input"
        type="text"
        placeholder="First Name"
      />
      <TextInput
        inputProps={{
          label: 'Name',
          name: 'name',
        }}
      />
      <TextInput
        inputProps={{
          label: 'E-mail',
          name: 'email',
          validation: 'email',
          required: true,
        }}
      />
      <TextInput
        inputProps={{
          label: 'Password',
          name: 'password',
          validation: 'password',
          required: true,
        }}
      />
      <br/><br/>
      <SubmitInput />
    </StyledForm>
  )
}

export default reduxForm({
	form: 'registration'
})(RegistrationForm)
