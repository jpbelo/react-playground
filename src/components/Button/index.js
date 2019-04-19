import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  border-radius: 6px;
  border-width: 1px;
  padding: 10px;
  color: ${props => props.theme.grey.primary};
  background-color: ${props => props.theme.green.primary};
  :hover {
    background-color: ${props => props.theme.green.secondary};
  }

  ${props => props.disabled && css`
    filter: saturate(.1);
  `}

  ${props => props.secondary && css`
    background-color: ${props => props.theme.blue.primary};
    :hover {
      background-color: ${props => props.theme.blue.secondary};
    }
  `}

  ${props => props.passState.hue !== '' && css`
    background-color: hsl(${props.passState.hue}, 100%, 80%);
    border-color: hsl(${props.passState.hue}, 100%, 25%);
    color: hsl(${props.passState.hue}, 100%, 25%);
    :hover {
      background-color: hsl(${props.passState.hue}, 100%, 90%);
    }
  `}
`

class Button extends Component {
  state = {
    hue: '',
  }

  changeColor = () => {
  	if(window.confirm('You sure?')){
      const hue = Math.floor(Math.random() * 360)
      this.setState({
        hue
      })
  	}
  }

  render() {
    return (
      <StyledButton
        onClick={this.changeColor}
        passState={this.state}
        {...this.props}
      >
        {this.props.children}
      </StyledButton>
    )
  }
}

export default Button
