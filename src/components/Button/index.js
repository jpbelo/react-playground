import React, { Component } from 'react'
import styled, { css } from 'styled-components'

export const buttonStyles = theme => ({
  borderRadius: '6px',
  border: `1px solid ${theme.colors.grey.main}`,
  padding: '10px',
  color: theme.colors.grey.main,
  backgroundColor: theme.colors.primary.bg,
})

/*
  :hover {
    backgroundColor: ${props => props.theme.colors.primary.bgAlt};
  }

   ${props => props.disabled && css`
    filter: saturate(.1);
  `}

  ${props => props.secondary && css`
    background-color: ${props => props.theme.colors.secondary.bg};
    :hover {
      background-color: ${props => props.theme.colors.secondary.bgAlt};
    }
  `}
*/

const StyledButton = styled.button(props => ({
  ...buttonStyles(props.theme),
}))

class Button extends Component {
  render() {
    return (
      <StyledButton {...this.props} >
        {this.props.children}
      </StyledButton>
    )
  }
}

export default Button
