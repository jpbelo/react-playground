import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'

import { SubmitInput, TextInput, PasswordInput } from '../../Inputs'

import submit from './submit'

const StyledForm = styled.form`
  background-color: #ddd;
`

const LoginForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Field name="username" component={TextInput} label="Username" placeholder="my_user_name" />
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
      <br />
      <p>
        username: dev
        <br />
        password: reduxform
      </p>
    </StyledForm>
  )
}

export default reduxForm({
  form: 'loginForm',
})(LoginForm)
