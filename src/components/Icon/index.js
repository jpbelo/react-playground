import React, { Component, Fragment } from 'react'
import styled, { withTheme, css } from 'styled-components'

import icons from './icons'

const IconContainer = styled.div`
  display: block;
  width: ${props => props.theme.sizeX * props.size}px;
  height: ${props => props.theme.sizeX * props.size}px;

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
    let iconColor
    if( this.props.primary ){
      iconColor = this.props.theme.colors.primary.main
    } else if( this.props.secondary ){
      iconColor = this.props.theme.colors.secondary.main
    } else {
      iconColor = this.props.theme.colors.grey.main
    }

    let iconSize = 2
    if( this.props.size ){
      iconSize = this.props.size
    }

    return (
      <IconContainer color={iconColor} size={iconSize}>
        <SpecificIcon />
      </IconContainer>
    )
  }
}

export default withTheme(Icon)
