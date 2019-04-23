import React, { Component, Fragment } from 'react'
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

class TextInput extends Component {
  render() {
  	const { inputProps } = this.props
    return (
      <UID>
        {id => (
          <Fragment>
            {inputProps && inputProps.label && (
              <Label for={id}>
                {inputProps.label}
              </Label>
            )}
            <StyledTextInput name={inputProps.name} id={id} />
          </Fragment>
        )}
      </UID>
    )
  }
}

export default TextInput
