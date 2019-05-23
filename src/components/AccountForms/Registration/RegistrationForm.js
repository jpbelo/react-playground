import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'

import { SubmitInput, TextInput, PasswordInput } from '../../Inputs'

import submit from './submit'

const StyledForm = styled.form`
  background-color: #ddd;
`

const RegistrationForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Field name="username" component={TextInput} label="Username" placeholder="my_user_name" />
      <Field name="firstName" component={TextInput} label="First Name" placeholder="First Name" />
      <Field name="lastName" component={TextInput} label="Last Name" placeholder="Last Name" />
      <Field name="email" component={TextInput} label="E-mail" placeholder="mail@exemple.com" />
      <Field name="password" component={PasswordInput} label="Password" />
      <br />
      <br />
      {error && <strong>{error}</strong>}
      <br />
      <br />
      <SubmitInput disabled={pristine || submitting} type="submit">
        Send
      </SubmitInput>
      <SubmitInput disabled={pristine || submitting} onClick={reset}>
        Clear
      </SubmitInput>
    </StyledForm>
  )
}

export default reduxForm({
  form: 'registrationForm',
})(RegistrationForm)
