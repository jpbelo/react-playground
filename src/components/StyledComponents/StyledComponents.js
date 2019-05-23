import React, { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  border: 1px solid black;
  font-size: 20px;
  color: red;
`

const Card = styled.div`
  border-radius: 6px;
  padding: 10px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1), 0 0 5px 5px rgba(0, 0, 0, 0.2);

  h4 {
    font-size: 20px;
    color: ${props => props.passState.titleColor};
  }
  p {
    font-size: 14px;
  }

  ${props =>
    props.alternativeUI &&
    css`
      background-color: #eeefff;
    `}
`

class StyledComponents extends Component {
  state = {
    titleColor: 'grey',
  }

  changeTitleColor = () => {
    if (window.confirm('you sure?')) {
      const rgbR = Math.floor(Math.random() * 255)
      const rgbG = Math.floor(Math.random() * 255)
      const rgbB = Math.floor(Math.random() * 255)
      const newColor = `rgb( ${rgbR}, ${rgbG}, ${rgbB} )`
      this.setState({
        titleColor: newColor,
      })
    }
  }

  render() {
    return (
      <Fragment>
        <h1>Styled Components</h1>
        <StyledButton onClick={this.changeTitleColor}>Change colors</StyledButton>
        <Card passState={this.state}>
          <h4>Card 1 title</h4>
          <p>Description text</p>
        </Card>
        <Card passState={this.state} alternativeUI>
          <h4>Card 2 title</h4>
          <p>Description text</p>
        </Card>
      </Fragment>
    )
  }
}

export default StyledComponents
