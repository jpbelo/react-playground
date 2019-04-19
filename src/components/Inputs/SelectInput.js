import React, { Component, Fragment } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import styled, { css } from 'styled-components'
import { UID } from 'react-uid'

import Label from './Label'
import AlertIcon from '../Icon/icons/Alert'

const StyledSelectInput = styled.select`
  all: unset;
  border-radius: 6px;
  padding: 10px 40px 10px 10px;
  background-color: ${props => props.theme.colors.primary.bg};
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: right 8px center;
`

class SelectInput extends Component {
  render() {
    const AlertIconStr = encodeURIComponent(renderToStaticMarkup(<AlertIcon />))
    const dataUri = `url("data:image/svg+xml,${AlertIconStr}")`
    return (
      <UID>
        {id => (
          <Fragment>
            {this.props.inputProps.label && (
              <Label for={id}>
                {this.props.inputProps.label}
              </Label>
            )}
            <StyledSelectInput
              id={id}
              style={{
              	backgroundImage: dataUri,
              }}
            >
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
