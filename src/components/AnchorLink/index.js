import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { buttonStyles } from '../Button'

const StyledAnchorLink = styled(Link)(props => (
  props.showAsButton ? {
    ...buttonStyles(props.theme)
  }:{
    backgroundColor: 'red',
  }
))

class AnchorLink extends Component {
  render() {
    return (
      <StyledAnchorLink {...this.props} >
        {this.props.children}
      </StyledAnchorLink>
    )
  }
}

export default AnchorLink
