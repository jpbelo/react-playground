import React, { Fragment } from 'react'
import styled from 'styled-components'
import { UID } from 'react-uid'

import Label from './Label'

const StyledTextInput = styled.input`
  padding: 10px;
  border-radius: 6px;
  border-color: ${props => props.theme.colors.primary.dark};
  color: ${props => props.theme.colors.primary.dark};
  background-color: ${props => props.theme.colors.primary.bgAlt};
  :focus {
    color: ${props => props.theme.colors.grey.main};
    background-color: ${props => props.theme.colors.primary.bg};
  }
`

const TextInput = ({ placeholder, input, label, type, meta: { touched, error } }) => (
  <UID>
    {id => (
      <Fragment>
        {label && <Label htmlFor={id}>{label}</Label>}
        <StyledTextInput {...input} id={id} type="text" placeholder={placeholder && placeholder} />
        {touched && error && <span className="error">{error}</span>}
      </Fragment>
    )}
  </UID>
)

export default TextInput
