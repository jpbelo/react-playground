import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const CardContainer = styled.div`
  border-radius: 6px;
  background-color: #ccc;
  padding: 10px;

  ${props => props.secondary && css`
    background-color: red;
  `}

  h2 {
    margin: 0 0 6px;
  }
  p {
  	margin: 0;
  }
`

class Card extends Component {
  render() {
    return (
      <CardContainer {...this.props}>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </CardContainer>
    )
  }
}

export default Card
