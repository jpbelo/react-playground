import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  border-radius: 6px;
  padding: 10px;
  background-color: green;

  ${props => props.options && props.options.type === 'secondary' && css`
    background-color: red;
  `}
`

class Button extends Component {
  render() {
    return (
      <StyledButton {...this.props}>
        {this.props.children}
      </StyledButton>
    )
  }
}

export default Button
