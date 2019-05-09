import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { width } from 'styled-system'

import { H1, P } from '../Text'

const CardContainer = styled.div`
  ${width};
  border-radius: 6px;
  padding: 10px;
  color: ${(props) => props.theme.colors.grey.main};
  background-color: ${(props) => props.theme.colors.primary.bg};

  ${(props) =>
    props.secondary &&
    css`
      background-color: ${(props) => props.theme.colors.secondary.bg};
    `}
`

class Card extends Component {
  render() {
    return (
      <CardContainer {...this.props}>
        <H1>{this.props.title}</H1>
        <P>{this.props.description}</P>
      </CardContainer>
    )
  }
}

export default Card
