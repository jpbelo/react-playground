import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { width } from 'styled-system'

const CardContainer = styled.div`
  ${width};
  border-radius: 6px;
  padding: 10px;
  color: ${props => props.theme.colors.grey.main};
  background-color: ${props => props.theme.colors.primary.bg};

  ${props => props.secondary && css`
    background-color: ${props => props.theme.colors.secondary.bg};
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
