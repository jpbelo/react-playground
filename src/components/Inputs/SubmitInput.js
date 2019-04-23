import React, { Component } from 'react'
import styled from 'styled-components'

const StyledSubmitInput = styled.input`
  padding: 10px;
  border-radius: 6px;
  border-color: ${props => props.theme.colors.primary.dark};
  color: ${props => props.theme.colors.primary.dark};
  background-color: ${props => props.theme.colors.primary.bgAlt};
`

class SubmitInput extends Component {
  render() {
    return (
      <StyledSubmitInput type="submit" />
    )
  }
}

export default SubmitInput
