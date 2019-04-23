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

const TextInput = (field) => (
  <UID>
    {id => (
      <Fragment>
        {field.label && (
          <Label htmlFor={id}>
            {field.label}
          </Label>
        )}
        <StyledTextInput
          {...field.input}
          id={id}
          type="text"
          placeholder={field.placeholder && field.placeholder}
        />
        {field.meta.touched && field.meta.error &&
        <span className="error">{field.meta.error}</span>}
      </Fragment>
    )}
  </UID>
)

export default TextInput
