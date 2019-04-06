import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

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
`

class StyledComponents extends Component {

  state = {
    titleColor: 'grey',
  }

  changeTitleColor = () => {
  	if(window.confirm('you sure?')){
      const rgbR = Math.floor(Math.random() * 255)
      const rgbG = Math.floor(Math.random() * 255)
      const rgbB = Math.floor(Math.random() * 255)
      const newColor = `rgb( ${rgbR}, ${rgbG}, ${rgbB} )`
      this.setState({
      	titleColor: newColor
      })
  	}
  }

  render() {
    return (
      <Fragment>
        <h1>Styled Components</h1>
        <StyledButton
          onClick={this.changeTitleColor}
        >
          Styled Button
        </StyledButton>
        <Card
         passState={this.state}
        >
          <h4>Title</h4>
          <p>Description text</p>
        </Card>
      </Fragment>
    )
  }
}

export default StyledComponents
