import React, { Component } from 'react'
import styled from 'styled-components'

import { SubmitInput, TextInput } from '../Inputs'

const StyledForm = styled.form`
  border: 1px solid black;
`

class RegistrationForm extends Component {
  render() {
    return (
      <StyledForm action="load-stuff">
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
}

export default RegistrationForm