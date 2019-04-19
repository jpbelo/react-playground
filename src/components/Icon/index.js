import React, { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'

import UserIcon from './icons/User'
import AlertIcon from './icons/Alert'

const icons = {
  user: UserIcon,
  alert: AlertIcon,
}

const IconContainer = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  ${props => props.color && css`
    path, polygon, rect {
      fill: ${props => props.color};
    }
    circle {
      stroke: ${props => props.color};
      stroke-width: 1;
    }
  `}
`

class Icon extends Component {
  render() {
    const SpecificIcon = icons[this.props.name]
    return (
      <IconContainer {...this.props}>
        <SpecificIcon />
      </IconContainer>
    )
  }
}

export default Icon
