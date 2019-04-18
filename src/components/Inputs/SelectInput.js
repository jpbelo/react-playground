import React, { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'
import { UID } from 'react-uid'

import Label from './Label'

const StyledSelectInput = styled.select`
  border-radius: 6px;
  padding: 10px;
  background-color: green;
`

class SelectInput extends Component {
  render() {
    return (
      <UID>
        {id => (
          <Fragment>
            {this.props.inputProps.label && (
              <Label for={id}>
                {this.props.inputProps.label}
              </Label>
            )}
            <StyledSelectInput id={id}>
              {this.props.inputProps.options.map( option => (
                <option value={option.value}>{option.text}</option>
              ))}
            </StyledSelectInput>
          </Fragment>
        )}
      </UID>
    )
  }
}

export default SelectInput
