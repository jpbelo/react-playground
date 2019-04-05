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
  	color: grey;
  }
  p {
  	font-size: 14px;
  }
`

class StyledComponents extends Component {
  render() {
    return (
      <Fragment>
        <h1>Styled Components</h1>
        <StyledButton>Styled Button</StyledButton>
        <Card>
          <h4>Title</h4>
          <p>Description text</p>
        </Card>
      </Fragment>
    )
  }
}

export default StyledComponents
