import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { width } from 'styled-system'

import { StyledButton } from '../Button'

const StyledAnchorLink = styled(Link)`
  ${width};
  text-decoration: underline;
  color: ${props => props.secondary ? props.theme.colors.secondary.dark : props.theme.colors.primary.dark};
`

class AnchorLink extends Component {
  render() {
    if( this.props.showAsButton ){
      return (
        <StyledButton {...this.props} as={Link} >
          {this.props.children}
        </StyledButton>
      )
    } else {
      return (
        <StyledAnchorLink {...this.props} >
          {this.props.children}
        </StyledAnchorLink>
      )
    }
  }
}

export default AnchorLink
