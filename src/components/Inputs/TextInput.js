import React, { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'
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
    return (
      <UID>
        {id => (
          <Fragment>
            {this.props.inputProps && this.props.inputProps.label && (
              <Label for={id}>
                {this.props.inputProps.label}
              </Label>
            )}
            <StyledTextInput id={id} />
          </Fragment>
        )}
      </UID>
    )
  }
}

export default TextInput
