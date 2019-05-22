import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { width, color, space } from 'styled-system'

export const StyledButton = styled.button`
  ${width};
  ${color};
  ${space};
  display: block;
  border-radius: 6px;
  border: 1px solid ${props => (props.secondary ? props.theme.colors.secondary.main : props.theme.colors.primary.main)};
  padding: 10px;
  color: ${props => !props.color && props.theme.colors.grey.main};
  background-color: ${props => (props.secondary ? props.theme.colors.secondary.bg : props.theme.colors.primary.bg)};
  ${props =>
    !props.disabled &&
    css`
  &:hover {
    background-color: ${props => (props.secondary ? props.theme.colors.secondary.bgAlt : props.theme.colors.primary.bgAlt)};
  },
  `}
  ${props =>
    props.disabled &&
    css`
      background-color: ${props => props.theme.colors.grey.light};
      border-color: ${props => props.theme.colors.grey.main};
    `}
`

class Button extends Component {
  render() {
    return <StyledButton {...this.props}>{this.props.children}</StyledButton>
  }
}

export default Button
