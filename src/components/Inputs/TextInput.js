import React, { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'
import { UID } from 'react-uid'

import Label from './Label'

const StyledTextInput = styled.input`
  border-radius: 6px;
  padding: 10px;
  background-color: green;
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
