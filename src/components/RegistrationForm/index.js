import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'

import { SubmitInput, TextInput, PasswordInput } from '../Inputs'

const StyledForm = styled.form`
  background-color: #ddd;
`

const RegistrationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Field
        name="firstName"
        component={TextInput}
        label="First Name"
        placeholder="First Name"
      />
      <Field
        name="lastName"
        component={TextInput}
        label="Last Name"
        placeholder="Last Name"
      />
      <Field
        name="email"
        component={TextInput}
        label="E-mail"
        placeholder="mail@exemple.com"
      />
      <Field
        name="password"
        component={PasswordInput}
        label="Password"
      />
      <br/><br/>
      <SubmitInput />
    </StyledForm>
  )
}

export default reduxForm({
	form: 'registration'
})(RegistrationForm)
